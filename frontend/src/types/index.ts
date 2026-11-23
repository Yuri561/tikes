export type Product={id:string;name:string;category:string;price:number;cost:number;stock:number;minStock:number;emoji:string};
export type Sale={id:string;productId:string;productName:string;quantity:number;unitPrice:number;unitCost:number;date:string;customer:string;method:'Kach'|'MonCash'|'Transfè'};
export type Expense={id:string;title:string;amount:number;category:string;date:string;kind:'business'|'personal'};
export type Debt={id:string;name:string;amount:number;type:'receivable'|'payable';due:string;status:'pending'|'paid';note:string};
export type Goal={id:string;title:string;target:number;saved:number;emoji:string;kind:'business'|'personal';deadline:string};
export type Activity={id:string;title:string;detail:string;date:string;type:'sale'|'expense'|'debt'|'goal'};
export type State={products:Product[];sales:Sale[];expenses:Expense[];debts:Debt[];goals:Goal[];activities:Activity[];businessName:string;ownerName:string;currency:'HTG'|'USD';onboarded:boolean};
export type Action=
| {type:'ADD_PRODUCT';payload:Product}|{type:'UPDATE_PRODUCT';payload:Product}|{type:'DELETE_PRODUCT';id:string}
| {type:'ADD_SALE';payload:Sale}|{type:'ADD_EXPENSE';payload:Expense}
| {type:'ADD_DEBT';payload:Debt}|{type:'SETTLE_DEBT';id:string}
| {type:'ADD_GOAL';payload:Goal}|{type:'CONTRIBUTE_GOAL';id:string;amount:number}
| {type:'SET_PROFILE';payload:{businessName:string;ownerName:string;currency:'HTG'|'USD'}}
| {type:'RESET'};
