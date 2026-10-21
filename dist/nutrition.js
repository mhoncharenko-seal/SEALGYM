// Original meal planning data. Values per 100 g edible food, approximate.
export const foods = {
 yogurt:{name:'Yogur griego natural 2%',p:9,c:4,f:2,fiber:0,kcal:70,group:'protein',state:'listo para comer',allergen:'lácteos'},
 proteinYogurt:{name:'Yogur natural alto en proteína',p:10,c:4,f:0.5,fiber:0,kcal:60.5,group:'protein',state:'listo para comer',allergen:'lácteos'},
 oats:{name:'Copos de avena',p:13,c:60,f:7,fiber:10,kcal:355,group:'carb',state:'seco',allergen:'avena'},
 berries:{name:'Frutos rojos',p:1,c:10,f:0.5,fiber:4,kcal:48.5,group:'fruit',state:'crudo'},
 banana:{name:'Plátano',p:1.1,c:23,f:0.3,fiber:2.6,kcal:99.1,group:'fruit',state:'sin piel'},
 apple:{name:'Manzana',p:0.3,c:14,f:0.2,fiber:2.4,kcal:59,group:'fruit',state:'parte comestible'},
 orange:{name:'Naranja',p:0.9,c:12,f:0.1,fiber:2.4,kcal:52.5,group:'fruit',state:'sin piel'},
 kiwi:{name:'Kiwi',p:1.1,c:15,f:0.5,fiber:3,kcal:68.9,group:'fruit',state:'parte comestible'},
 chicken:{name:'Pechuga de pollo',p:23,c:0,f:2,fiber:0,kcal:110,group:'protein',state:'peso crudo'},
 turkey:{name:'Pechuga de pavo',p:24,c:0,f:1.5,fiber:0,kcal:109.5,group:'protein',state:'peso crudo'},
 beef:{name:'Ternera magra',p:21,c:0,f:5,fiber:0,kcal:129,group:'protein',state:'peso crudo'},
 egg:{name:'Huevo (sin cáscara)',p:12.6,c:0.7,f:9.5,fiber:0,kcal:138.7,group:'protein',state:'peso crudo; unos 50 g por huevo',allergen:'huevo'},
 cheese:{name:'Queso fresco batido natural',p:8,c:4,f:0.5,fiber:0,kcal:52.5,group:'protein',state:'listo para comer',allergen:'lácteos'},
 milk:{name:'Leche semidesnatada',p:3.4,c:4.8,f:1.6,fiber:0,kcal:47.2,group:'protein',state:'gramos ≈ mililitros',allergen:'lácteos'},
 rice:{name:'Arroz integral',p:7.5,c:76,f:2.7,fiber:3.5,kcal:358.3,group:'carb',state:'peso seco'},
 pasta:{name:'Pasta integral',p:13,c:65,f:2.5,fiber:8,kcal:334.5,group:'carb',state:'peso seco',allergen:'trigo'},
 bread:{name:'Pan integral',p:9,c:43,f:3.5,fiber:7,kcal:239.5,group:'carb',state:'listo para comer',allergen:'trigo'},
 potato:{name:'Patata',p:2,c:17,f:0.1,fiber:2.2,kcal:76.9,group:'carb',state:'peso crudo'},
 sweetpotato:{name:'Batata',p:1.6,c:20,f:0.1,fiber:3,kcal:87.3,group:'carb',state:'peso crudo'},
 tomato:{name:'Tomate',p:0.9,c:3.9,f:0.2,fiber:1.2,kcal:21,group:'veg',state:'peso crudo'},
 sauce:{name:'Tomate triturado sin añadidos',p:1.3,c:5,f:0.2,fiber:1.5,kcal:27,group:'veg',state:'sin cebolla ni verduras añadidas'},
 cucumber:{name:'Pepino',p:0.7,c:3.6,f:0.1,fiber:0.5,kcal:18.1,group:'veg',state:'peso crudo'},
 avocado:{name:'Aguacate',p:2,c:2,f:15,fiber:6.7,kcal:151,group:'fat',state:'sin piel ni hueso'},
 nuts:{name:'Nueces naturales',p:15,c:7,f:65,fiber:7,kcal:673,group:'fat',state:'sin cáscara',allergen:'frutos secos'},
 olive:{name:'Aceite de oliva virgen extra',p:0,c:0,f:100,fiber:0,kcal:900,group:'fat',state:'añadir en gramos'}
};
const meal=(name,time,items)=>({name,time,items});
export const week = [
 {day:'Lunes',meals:[meal('Yogur, avena y frutos rojos','08:00',[['yogurt',250],['oats',65],['berries',150]]),meal('Pollo, arroz integral y tomate','14:00',[['chicken',180],['rice',90],['tomato',180],['olive',12]]),meal('Plátano y yogur alto en proteína','17:00',[['banana',120],['proteinYogurt',250]]),meal('Tortilla, patata y aguacate','21:00',[['egg',150],['potato',300],['avocado',80],['olive',8]])]},
 {day:'Martes',meals:[meal('Tostadas integrales, huevos y naranja','08:00',[['bread',100],['egg',150],['orange',180]]),meal('Ternera, patata asada y pepino','14:00',[['beef',180],['potato',350],['cucumber',180],['olive',12]]),meal('Queso fresco batido y kiwi','17:00',[['cheese',250],['kiwi',150]]),meal('Pavo, arroz y tomate','21:00',[['turkey',180],['rice',85],['tomato',180],['olive',12]])]},
 {day:'Miércoles',meals:[meal('Avena con leche, yogur y plátano','08:00',[['oats',65],['milk',150],['yogurt',150],['banana',100]]),meal('Pasta con ternera magra y tomate','14:00',[['pasta',100],['beef',180],['sauce',180],['olive',10]]),meal('Yogur natural y nueces','17:00',[['yogurt',250],['nuts',25]]),meal('Pollo al horno, batata y pepino','21:00',[['chicken',180],['sweetpotato',300],['cucumber',180],['olive',10]])]},
 {day:'Jueves',meals:[meal('Huevos, pan integral y manzana','08:00',[['egg',150],['bread',100],['apple',180]]),meal('Arroz con pollo y aguacate','14:00',[['rice',90],['chicken',180],['avocado',80]]),meal('Queso fresco y plátano','17:00',[['cheese',250],['banana',120]]),meal('Hamburguesa casera, patata y tomate','21:00',[['beef',180],['potato',300],['tomato',180],['olive',10]])]},
 {day:'Viernes',meals:[meal('Yogur alto en proteína, avena y fruta','08:00',[['proteinYogurt',250],['oats',70],['berries',150]]),meal('Pavo con pasta integral y tomate','14:00',[['turkey',180],['pasta',100],['sauce',180],['olive',12]]),meal('Tostada con queso fresco y fruta','17:00',[['bread',60],['cheese',200],['kiwi',150]]),meal('Tortilla de patata, tomate y pepino','21:00',[['egg',150],['potato',300],['tomato',150],['cucumber',150],['olive',12]])]},
 {day:'Sábado',meals:[meal('Tostadas con huevo y aguacate','08:00',[['bread',100],['egg',150],['avocado',60]]),meal('Pollo asado con patata y tomate','14:00',[['chicken',180],['potato',350],['tomato',180],['olive',12]]),meal('Yogur griego y fruta','17:00',[['yogurt',250],['orange',200]]),meal('Pasta integral con ternera magra','21:00',[['pasta',100],['beef',180],['sauce',150],['olive',10]])]},
 {day:'Domingo',meals:[meal('Avena con yogur y plátano','08:00',[['oats',65],['yogurt',250],['banana',120]]),meal('Ternera, arroz y aguacate','14:00',[['beef',180],['rice',90],['avocado',80]]),meal('Queso fresco batido con frutas','17:00',[['cheese',250],['berries',100],['kiwi',100]]),meal('Pavo con batata y tomate','21:00',[['turkey',180],['sweetpotato',300],['tomato',180],['olive',12]])]}
];
export const optionalSnack=meal('Snack previo opcional: plátano','18:00',[['banana',120]]);
export const mealSlots=['Desayuno','Comida','Merienda','Cena'];
export function targets(profile={}) {
 const age=Number(profile.age),height=Number(profile.height),weight=Number(profile.weight);
 if(!Number.isFinite(age)||!Number.isFinite(height)||!Number.isFinite(weight)||age<18||age>85||height<130||height>220||weight<40||weight>220) return null;
 const bmi=weight/(height/100)**2;
 if(bmi<18.5||bmi>40||profile.medical===true) return null;
 const activity={low:1.35,moderate:1.55,high:1.75}[profile.activity]||1.35;
 const bmr=10*weight+6.25*height-5*age+5,maintenance=bmr*activity;
 const factor=profile.goal==='muscle'?1.05:profile.goal==='maintenance'?1:0.9;
 const kcal=Math.round(maintenance*factor),protein=Math.round(weight*1.8),fat=Math.round(weight*0.9);
 return {kcal,protein,carbs:Math.round(Math.max(0,(kcal-protein*4-fat*9)/4)),fat,maintenance:Math.round(maintenance),bmr:Math.round(bmr)};
}
export function macros(items=[]) {
 const result={kcal:0,p:0,c:0,f:0,fiber:0};
 for(const [id,grams] of items) {
  if(!foods[id]||!Number.isFinite(Number(grams))||Number(grams)<0) continue;
  for(const key of Object.keys(result)) result[key]+=foods[id][key]*Number(grams)/100;
 }
 return Object.fromEntries(Object.entries(result).map(([k,v])=>[k,Math.round(v*10)/10]));
}
const clone=m=>({...m,items:m.items.map(([id,g])=>[id,g])});
function scaleDay(meals,profile) {
 const target=targets(profile); if(!target) return meals.map(m=>({...clone(m),macros:macros(m.items)}));
 const rows=meals.flatMap(m=>m.items),base=macros(rows);
 let proteinP=0,proteinK=0,energyP=0,energyK=0,fixedP=0,fixedK=0;
 for(const [id,g] of rows){ const f=foods[id],p=f.p*g/100,k=f.kcal*g/100;
  if(f.group==='protein'){proteinP+=p;proteinK+=k;}else if(['carb','fat'].includes(f.group)){energyP+=p;energyK+=k;}else{fixedP+=p;fixedK+=k;}
 }
 // Two unknowns (protein foods, carbohydrate/fat foods) fitted to protein and energy.
 const det=proteinP*energyK-energyP*proteinK;
 let ps=det?( (target.protein-fixedP)*energyK-energyP*(target.kcal-fixedK))/det:1;
 let es=det?(proteinP*(target.kcal-fixedK)-(target.protein-fixedP)*proteinK)/det:target.kcal/base.kcal;
 ps=Math.max(0.6,Math.min(2,ps)); es=Math.max(0.55,Math.min(2,es));
 return meals.map(m=>{const items=m.items.map(([id,g])=>[id,Math.round(g*(foods[id].group==='protein'?ps:['carb','fat'].includes(foods[id].group)?es:1))]);return {...m,items,macros:macros(items)};});
}
export function scaledMeals(dayIndex,profile={},overrides={}) {
 const d=((Number(dayIndex)%7)+7)%7;
 const scaled=scaleDay(week[d].meals,profile);
 return scaled.map((m,i)=>{const replacement=overrides[`${d}:${i}`];if(!replacement?.items)return m;
 const valid=replacement.items.filter(([id,g])=>foods[id]&&Number.isFinite(Number(g))&&Number(g)>=0&&Number(g)<=2000).map(([id,g])=>[id,Number(g)]);
 return {...m,...replacement,items:valid,macros:macros(valid)};});
}
export function replaceMeal(dayIndex,mealIndex,profile={},offset=1) {
 return {...scaledMeals((Number(dayIndex)+offset+7)%7,profile)[mealIndex],time:week[dayIndex].meals[mealIndex].time};
}
export function shoppingList(profile={},overrides={}) {
 const sums={}; for(let d=0;d<7;d++) for(const m of scaledMeals(d,profile,overrides)) for(const [id,g] of m.items) sums[id]=(sums[id]||0)+g;
 return Object.entries(sums).map(([id,grams])=>({id,name:foods[id].name,grams:Math.round(grams),state:foods[id].state})).sort((a,b)=>a.name.localeCompare(b.name,'es'));
}
