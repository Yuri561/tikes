import {createContext,useContext,useEffect,useMemo,useReducer,type ReactNode} from 'react';
import {seed} from '../data/seed';
import {today,uid} from '../lib/format';
import type {Action,Activity,State} from '../types';
const STORAGE_KEY='tikes-demo-v1';
function init():State{try{const raw=localStorage.getItem(STORAGE_KEY);if(raw){const parsed=JSON.parse(raw) as State;if(Array.isArray(parsed.products)&&Array.isArray(parsed.sales))return parsed}}catch{}return seed}
function withActivity(s:State,activity:Omit<Activity,'id'|'date'>):State{return {...s,activities:[{...activity,id:uid(),date:today()},...s.activities].slice(0,30)}}
function reducer(s:State,a:Action):State{switch(a.type){
case 'ADD_PRODUCT':return withActivity({...s,products:[a.payload,...s.products]}, {type:'goal',title:'Nouvo pwodwi',detail:a.payload.name});
case 'UPDATE_PRODUCT':return {...s,products:s.products.map(p=>p.id===a.payload.id?a.payload:p)};
case 'DELETE_PRODUCT':return {...s,products:s.products.filter(p=>p.id!==a.id)};
case 'ADD_SALE':{const p=s.products.find(p=>p.id===a.payload.productId);if(!p||p.stock<a.payload.quantity)return s;const next={...s,products:s.products.map(x=>x.id===p.id?{...x,stock:x.stock-a.payload.quantity}:x),sales:[a.payload,...s.sales]};return withActivity(next,{type:'sale',title:'Nouvo lavant',detail:`${a.payload.quantity} × ${p.name}`})}
case 'ADD_EXPENSE':return withActivity({...s,expenses:[a.payload,...s.expenses]},{type:'expense',title:'Nouvo depans',detail:a.payload.title});
case 'ADD_DEBT':return withActivity({...s,debts:[a.payload,...s.debts]},{type:'debt',title:'Nouvo dèt',detail:a.payload.name});
case 'SETTLE_DEBT':return {...s,debts:s.debts.map(d=>d.id===a.id?{...d,status:'paid'}:d)};
case 'ADD_GOAL':return {...s,goals:[a.payload,...s.goals]};
case 'CONTRIBUTE_GOAL':return {...s,goals:s.goals.map(g=>g.id===a.id?{...g,saved:Math.min(g.target,g.saved+a.amount)}:g)};
case 'SET_PROFILE':return {...s,...a.payload};
case 'RESET':return structuredClone(seed);
}}
const Context=createContext<{state:State;dispatch:React.Dispatch<Action>}|null>(null);
export function StoreProvider({children}:{children:ReactNode}){const [state,dispatch]=useReducer(reducer,undefined,init);useEffect(()=>{localStorage.setItem(STORAGE_KEY,JSON.stringify(state))},[state]);const value=useMemo(()=>({state,dispatch}),[state]);return <Context.Provider value={value}>{children}</Context.Provider>}
export function useStore(){const v=useContext(Context);if(!v)throw new Error('StoreProvider missing');return v}
export function useMetrics(){const {state}=useStore();const revenue=sumOf(state.sales.map(s=>s.quantity*s.unitPrice));const cost=sumOf(state.sales.map(s=>s.quantity*s.unitCost));const businessExpenses=sumOf(state.expenses.filter(x=>x.kind==='business').map(e=>e.amount));const profit=revenue-cost-businessExpenses;const receivables=sumOf(state.debts.filter(d=>d.type==='receivable'&&d.status==='pending').map(d=>d.amount));const payables=sumOf(state.debts.filter(d=>d.type==='payable'&&d.status==='pending').map(d=>d.amount));return {revenue,cost,businessExpenses,profit,receivables,payables,lowStock:state.products.filter(p=>p.stock<=p.minStock),inventoryValue:sumOf(state.products.map(p=>p.stock*p.cost)),saleCount:state.sales.length}}
function sumOf(items:number[]){return items.reduce((a,b)=>a+b,0)}
