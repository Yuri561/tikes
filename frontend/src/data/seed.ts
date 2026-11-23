import type {State} from '../types';
const iso=(daysAgo:number)=>{const d=new Date();d.setDate(d.getDate()-daysAgo);return d.toISOString().slice(0,10)};
export const seed:State={
 businessName:'Boutik Solèy',ownerName:'Marie Joseph',currency:'HTG',onboarded:true,
 products:[
 {id:'p1',name:'Lwil maskriti',category:'Bote & swen',price:750,cost:440,stock:24,minStock:8,emoji:'🧴'},
 {id:'p2',name:'Kafe peyi',category:'Manje & bwason',price:1200,cost:760,stock:12,minStock:6,emoji:'☕'},
 {id:'p3',name:'Savon natirèl',category:'Bote & swen',price:350,cost:190,stock:37,minStock:10,emoji:'🧼'},
 {id:'p4',name:'Siwo jenjanm',category:'Manje & bwason',price:650,cost:380,stock:7,minStock:10,emoji:'🍯'},
 {id:'p5',name:'Panye atizanal',category:'Atizana',price:1850,cost:1100,stock:4,minStock:5,emoji:'🧺'},
 {id:'p6',name:'Chokola peyi',category:'Manje & bwason',price:500,cost:280,stock:31,minStock:8,emoji:'🍫'}],
 sales:[
 {id:'s1',productId:'p1',productName:'Lwil maskriti',quantity:3,unitPrice:750,unitCost:440,date:iso(0),customer:'Nadia P.',method:'MonCash'},
 {id:'s2',productId:'p2',productName:'Kafe peyi',quantity:2,unitPrice:1200,unitCost:760,date:iso(0),customer:'Jean R.',method:'Kach'},
 {id:'s3',productId:'p3',productName:'Savon natirèl',quantity:5,unitPrice:350,unitCost:190,date:iso(1),customer:'Sandra M.',method:'Kach'},
 {id:'s4',productId:'p6',productName:'Chokola peyi',quantity:4,unitPrice:500,unitCost:280,date:iso(2),customer:'Dany L.',method:'MonCash'},
 {id:'s5',productId:'p5',productName:'Panye atizanal',quantity:2,unitPrice:1850,unitCost:1100,date:iso(3),customer:'Rachel B.',method:'Transfè'},
 {id:'s6',productId:'p4',productName:'Siwo jenjanm',quantity:6,unitPrice:650,unitCost:380,date:iso(5),customer:'Wilson D.',method:'Kach'},
 {id:'s7',productId:'p2',productName:'Kafe peyi',quantity:3,unitPrice:1200,unitCost:760,date:iso(7),customer:'Sarah J.',method:'MonCash'},
 {id:'s8',productId:'p1',productName:'Lwil maskriti',quantity:4,unitPrice:750,unitCost:440,date:iso(9),customer:'Enock P.',method:'Kach'},
 {id:'s9',productId:'p6',productName:'Chokola peyi',quantity:5,unitPrice:500,unitCost:280,date:iso(12),customer:'Pauline V.',method:'MonCash'},
 {id:'s10',productId:'p3',productName:'Savon natirèl',quantity:7,unitPrice:350,unitCost:190,date:iso(16),customer:'Jessica M.',method:'Kach'},
 {id:'s11',productId:'p4',productName:'Siwo jenjanm',quantity:2,unitPrice:650,unitCost:380,date:iso(21),customer:'Mario F.',method:'Kach'},
 {id:'s12',productId:'p5',productName:'Panye atizanal',quantity:1,unitPrice:1850,unitCost:1100,date:iso(28),customer:'Lea S.',method:'Transfè'}],
 expenses:[
 {id:'e1',title:'Transpò machandiz',amount:850,category:'Transpò',date:iso(1),kind:'business'},
 {id:'e2',title:'Anbalaj pwodwi',amount:550,category:'Materyèl',date:iso(3),kind:'business'},
 {id:'e3',title:'Piblisite Facebook',amount:1200,category:'Maketing',date:iso(8),kind:'business'},
 {id:'e4',title:'Entènèt boutik',amount:700,category:'Sèvis',date:iso(15),kind:'business'},
 {id:'e5',title:'Depans lakay',amount:1600,category:'Lakay',date:iso(2),kind:'personal'}],
 debts:[
 {id:'d1',name:'Marie-Claire',amount:2800,type:'receivable',due:iso(-5),status:'pending',note:'Kòmand pwodwi bote'},
 {id:'d2',name:'Bèl Natirèl SARL',amount:4500,type:'payable',due:iso(-8),status:'pending',note:'Founiti savon'},
 {id:'d3',name:'Patrick Louis',amount:1250,type:'receivable',due:iso(3),status:'pending',note:'Kafe peyi'},
 {id:'d4',name:'Nadia Pierre',amount:1750,type:'receivable',due:iso(12),status:'paid',note:'Ansyen kòmand'}],
 goals:[
 {id:'g1',title:'Achte yon nouvo frijidè',target:35000,saved:21500,emoji:'🧊',kind:'business',deadline:iso(-90)},
 {id:'g2',title:'Fon ijans',target:50000,saved:18200,emoji:'🛟',kind:'personal',deadline:iso(-180)},
 {id:'g3',title:'Elaji boutik mwen',target:100000,saved:28500,emoji:'🏪',kind:'business',deadline:iso(-240)}],
 activities:[{id:'a1',title:'Nouvo lavant',detail:'3 × Lwil maskriti',date:iso(0),type:'sale'},{id:'a2',title:'Nouvo lavant',detail:'2 × Kafe peyi',date:iso(0),type:'sale'},{id:'a3',title:'Depans anrejistre',detail:'Transpò machandiz',date:iso(1),type:'expense'}]
};
