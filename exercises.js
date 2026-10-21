const definitions = [
['chest','Press de pecho en máquina','Pecho','press','Máquina','Ajusta el asiento: asas a media altura del pecho.','Empuja sin despegar espalda ni bloquear codos.','Vuelve despacio hasta un estiramiento cómodo.','Abrir demasiado los codos o arquear la zona lumbar.'],
['lat','Jalón al pecho','Espalda','lat','Polea','Fija los muslos y toma un agarre cómodo.','Lleva los codos hacia las costillas y la barra al pecho alto.','Deja subir los brazos con control, sin balancearte.','Tirar detrás de la nuca o impulsarte con el tronco.'],
['legpress','Prensa de piernas','Cuádriceps','legpress','Máquina','Apoya espalda y pelvis; pies a anchura cómoda.','Flexiona hasta donde mantengas la pelvis apoyada.','Empuja con toda la planta sin bloquear las rodillas.','Despegar la pelvis o juntar las rodillas.'],
['shoulder','Press de hombros en máquina','Hombros','shoulder','Máquina','Ajusta las asas a altura de hombros.','Empuja arriba con abdomen firme y muñecas neutras.','Baja de forma controlada hasta un rango cómodo.','Arquear la espalda o forzar un rango doloroso.'],
['lateral','Elevaciones laterales','Hombros','lateral','Mancuernas','De pie, brazos a los lados y codos ligeramente flexionados.','Eleva los brazos algo por delante del cuerpo hasta los hombros.','Baja lentamente sin impulso del tronco.','Encoger hombros o usar cargas que obligan a balancearte.'],
['curl','Curl de bíceps en polea','Bíceps','curl','Polea','De pie frente a polea baja, codos junto al cuerpo.','Flexiona los codos sin mover los hombros.','Extiende con control sin bloquear.','Balancearse o adelantar demasiado los codos.'],
['crunch','Crunch abdominal en máquina','Abdomen','crunch','Máquina','Ajusta asiento y almohadillas; cuello relajado.','Acerca suavemente costillas a pelvis.','Regresa con control sin tirar con los brazos.','Tirar del cuello o mover solo la cadera.'],
['incline','Press inclinado en máquina','Pecho','incline','Máquina','Ajusta asiento y respaldo para empujar en diagonal.','Mantén espalda apoyada y empuja sin bloquear.','Regresa lentamente a un estiramiento cómodo.','Elevar hombros o exagerar el arco lumbar.'],
['row','Remo sentado en polea','Espalda','row','Polea','Siéntate alto con rodillas suavemente flexionadas.','Lleva los codos atrás y las asas hacia las costillas.','Extiende brazos sin redondear la zona lumbar.','Balancear el tronco o encoger los hombros.'],
['legcurl','Curl femoral sentado','Isquiotibiales','legcurl','Máquina','Alinea rodilla con eje y fija almohadilla sobre muslos.','Flexiona rodillas llevando talones abajo y atrás.','Vuelve lentamente sin levantar la cadera.','Usar impulso o perder el apoyo de la pelvis.'],
['legext','Extensión de piernas','Cuádriceps','legext','Máquina','Alinea rodillas con eje; rodillo por encima del tobillo.','Extiende las rodillas de forma suave.','Baja despacio sin dejar caer el peso.','Bloquear con golpe o despegar la cadera.'],
['triceps','Extensión de tríceps en polea','Tríceps','triceps','Polea','Frente a polea alta, codos cerca del cuerpo.','Extiende codos llevando las manos hacia los muslos.','Regresa sin mover hombros ni tronco.','Inclinarse con todo el peso o abrir demasiado los codos.'],
['dbcurl','Curl con mancuernas','Bíceps','curl','Mancuernas','De pie con palmas al frente y codos a los lados.','Flexiona los codos sin balancear el cuerpo.','Baja lentamente hasta un rango cómodo.','Impulsar con la espalda o doblar las muñecas.'],
['plank','Plancha abdominal','Abdomen','plank','Peso corporal','Apoya antebrazos y puntas de pies; codos bajo hombros.','Mantén cabeza, tronco y pelvis alineados.','Respira con normalidad y termina si pierdes la posición.','Hundirse de cintura o aguantar la respiración.'],
['hammer','Curl martillo','Bíceps','curl','Mancuernas','Sujeta las mancuernas con palmas enfrentadas.','Flexiona codos manteniéndolos junto al tronco.','Baja despacio sin girar ni balancearte.','Elevar hombros o usar impulso.'],
['chestrow','Remo con apoyo de pecho','Espalda','row','Máquina','Ajusta el apoyo a altura del pecho y planta los pies.','Lleva codos atrás sin despegar el tórax.','Extiende lentamente los brazos.','Tirar con el cuello o perder el apoyo.'],
['bridge','Puente de glúteos','Glúteos','bridge','Peso corporal','Túmbate boca arriba con rodillas flexionadas y pies apoyados.','Eleva la pelvis apretando glúteos sin arquear la espalda.','Baja con control manteniendo el abdomen activo.','Hiperextender la zona lumbar.']
];
export const exercises = Object.fromEntries(definitions.map(([id,name,group,pattern,equipment,a,b,c,errors])=>[id,{id,name,group,pattern,equipment,tips:[a,b,c],initial:a,movement:b,errors,breath:pattern==='plank'?'Respira de forma continua.':'Exhala durante el esfuerzo; inspira al volver. No contengas la respiración.',alternatives:[],difficulty:1,limitations: group==='Hombros'||group==='Pecho'?['hombro']:['Cuádriceps','Isquiotibiales'].includes(group)?['rodilla']:group==='Espalda'?['espalda']:[]} ]));
function variant(id,name,base,equipment,tips){exercises[id]={...exercises[base],id,name,equipment,tips:tips||exercises[base].tips,initial:(tips||exercises[base].tips)[0],movement:(tips||exercises[base].tips)[1],alternatives:[],difficulty:equipment==='Mancuernas'?2:1};return id;}
variant('dbpress','Press de pecho con mancuernas','chest','Mancuernas',['Túmbate en banco plano, pies firmes y mancuernas junto al pecho.','Empuja arriba manteniendo codos algo cerca del tronco.','Baja con control sin forzar los hombros.']);
variant('convergent','Press en máquina convergente','chest','Máquina');
variant('pushup','Flexión inclinada en banco','chest','Peso corporal',['Manos sobre un banco estable, cuerpo alineado.','Acerca el pecho al banco doblando los codos.','Empuja para volver sin hundir la pelvis.']);exercises.pushup.pattern='pushup';
variant('assisted','Dominadas asistidas','lat','Máquina',['Ajusta asistencia y apoya rodillas según la máquina.','Lleva el pecho hacia las asas sin balancearte.','Desciende lentamente, manteniendo hombros cómodos.']);
variant('neutralLat','Jalón con agarre neutro','lat','Polea');
variant('singleLat','Jalón unilateral','lat','Polea',['Siéntate estable y sujeta un asa de polea alta.','Lleva el codo hacia la cadera sin girar el tronco.','Vuelve con control; completa ambos lados.']);
variant('horizontalPress','Prensa horizontal','legpress','Máquina');
variant('goblet','Sentadilla goblet a banco','legpress','Mancuernas',['Sujeta una mancuerna al pecho frente a un banco estable.','Baja doblando caderas y rodillas hasta tocar suavemente el banco.','Levántate empujando con toda la planta.']);exercises.goblet.pattern='squat';
variant('sitstand','Sentarse y levantarse de banco','legpress','Peso corporal',['Colócate frente a un banco, pies apoyados al ancho cómodo.','Siéntate lentamente sin dejarte caer.','Levántate con el peso repartido entre ambos pies.']);exercises.sitstand.pattern='squat';
variant('dbshoulder','Press de hombros con mancuernas','shoulder','Mancuernas',['Siéntate con respaldo, mancuernas a altura de hombros.','Empuja arriba sin arquear la espalda.','Baja lentamente; detente antes de un rango molesto.']);
variant('neutralShoulder','Press de hombros con agarre neutro','shoulder','Máquina');
variant('cableShoulder','Press de hombro unilateral en polea','shoulder','Polea',['Coloca polea baja detrás, asa a altura del hombro.','Empuja arriba con tronco estable.','Regresa suavemente y repite al otro lado.']);
variant('cableLateral','Elevación lateral en polea','lateral','Polea',['De lado a polea baja, sujeta el asa con brazo exterior.','Eleva el brazo ligeramente adelantado hasta altura del hombro.','Regresa con control y cambia de lado.']);
variant('machineLateral','Elevación lateral en máquina','lateral','Máquina',['Ajusta asiento y apoya brazos en almohadillas.','Abre los brazos hasta altura cómoda de hombros.','Regresa despacio sin encoger el cuello.']);
variant('seatedLateral','Elevación lateral sentado','lateral','Mancuernas',['Siéntate estable con mancuernas junto a las piernas.','Abre los brazos ligeramente por delante hasta los hombros.','Baja despacio sin balancear el tronco.']);
variant('machineCurl','Curl de bíceps en máquina','curl','Máquina',['Ajusta asiento y apoya brazos sobre almohadilla.','Flexiona codos sin levantar los hombros.','Extiende lentamente sin bloquear los codos.']);
variant('floorCrunch','Crunch en colchoneta','crunch','Peso corporal',['Túmbate boca arriba, rodillas flexionadas y manos sobre pecho.','Eleva ligeramente hombros acercando costillas a pelvis.','Vuelve suavemente sin tirar del cuello.']);
variant('cableCrunch','Crunch en polea','crunch','Polea',['Arrodíllate de espaldas a polea alta, cuerda junto a la cabeza.','Flexiona suavemente el tronco acercando costillas a pelvis.','Vuelve sin tirar con los brazos ni sentarte sobre talones.']);
variant('deadbug','Dead bug','crunch','Peso corporal',['Boca arriba, caderas y rodillas a 90 grados, brazos arriba.','Extiende brazo y pierna contrarios sin arquear la espalda.','Regresa y alterna lentamente; una repetición por lado.']);exercises.deadbug.pattern='deadbug';
variant('dbincline','Press inclinado con mancuernas','incline','Mancuernas',['Ajusta banco a inclinación suave, espalda apoyada.','Empuja mancuernas desde pecho alto hacia arriba.','Baja con control sin abrir excesivamente los codos.']);
variant('inclineConvergent','Press inclinado convergente','incline','Máquina');
variant('machineRow','Remo sentado en máquina','row','Máquina');
variant('dbrow','Remo con mancuernas y pecho apoyado','row','Mancuernas',['Apoya el pecho sobre banco inclinado y planta los pies.','Lleva mancuernas hacia las costillas, codos atrás.','Baja con control sin levantar el pecho.']);
variant('lyingCurl','Curl femoral tumbado','legcurl','Máquina',['Túmbate boca abajo con rodillo por encima de talones.','Flexiona las rodillas sin levantar la pelvis.','Baja despacio sin dejar caer las placas.']);exercises.lyingCurl.pattern='lyingCurl';
variant('standingCurl','Curl femoral de pie en máquina','legcurl','Máquina',['Ajusta el rodillo y apoya el tronco según la máquina.','Flexiona una rodilla llevando talón hacia glúteo.','Baja lentamente y cambia de pierna.']);
variant('sliderCurl','Curl femoral con deslizadores','legcurl','Peso corporal',['Boca arriba, talones sobre deslizadores y rodillas flexionadas.','Eleva un poco pelvis y desliza talones lejos sin arquear espalda.','Acerca talones con control; baja pelvis si es demasiado difícil.']);exercises.sliderCurl.pattern='bridge';exercises.sliderCurl.difficulty=3;
variant('singleExt','Extensión de pierna unilateral','legext','Máquina');
variant('rope','Tríceps con cuerda','triceps','Polea');
variant('barTriceps','Tríceps con barra en polea','triceps','Polea');
variant('machineTriceps','Extensión de tríceps en máquina','triceps','Máquina',['Ajusta el asiento y apoya brazos según la máquina.','Extiende codos manteniendo hombros estables.','Vuelve con control sin bloquear con golpe.']);
variant('kneelingPlank','Plancha con rodillas apoyadas','plank','Peso corporal',['Apoya antebrazos y rodillas con codos bajo hombros.','Alinea cabeza, tronco y muslos.','Respira sin hundir la zona lumbar.']);
variant('highPlank','Plancha inclinada en banco','plank','Peso corporal',['Apoya manos sobre banco estable, brazos extendidos.','Mantén el cuerpo alineado sin hundir cadera.','Respira con normalidad durante todo el tiempo.']);
const links={chest:['dbpress','convergent','pushup'],lat:['assisted','neutralLat','singleLat'],legpress:['horizontalPress','goblet','sitstand'],shoulder:['dbshoulder','neutralShoulder','cableShoulder'],lateral:['cableLateral','machineLateral','seatedLateral'],curl:['dbcurl','machineCurl','hammer'],crunch:['floorCrunch','cableCrunch','deadbug'],incline:['dbincline','inclineConvergent','pushup'],row:['machineRow','chestrow','dbrow'],legcurl:['lyingCurl','standingCurl','sliderCurl'],legext:['singleExt','horizontalPress','sitstand'],triceps:['rope','barTriceps','machineTriceps'],dbcurl:['curl','machineCurl','hammer'],plank:['kneelingPlank','highPlank','deadbug'],hammer:['dbcurl','curl','machineCurl'],chestrow:['row','machineRow','dbrow'],bridge:['legpress','horizontalPress','sitstand']};
for(const [id,alts] of Object.entries(links)) exercises[id].alternatives=alts;
for(const e of Object.values(exercises)){if(!e.alternatives.length)e.alternatives=Object.values(exercises).filter(x=>x.id!==e.id&&x.group===e.group).slice(0,3).map(x=>x.id);e.timed=e.pattern==='plank';e.unit=e.timed?'s':'reps';}
const p=(id,sets,min,max,rest=90)=>({id,sets,min,max,rest});
export const plans={A:[p('chest',3,8,12,120),p('lat',3,8,12,120),p('legpress',2,10,12,120),p('legcurl',2,10,15,90),p('shoulder',2,8,12,120),p('lateral',2,12,15,75),p('curl',2,10,15,75),p('crunch',2,12,15,60)],B:[p('incline',3,8,12,120),p('row',3,8,12,120),p('legcurl',2,10,15,90),p('legext',2,10,15,90),p('lateral',2,12,15,75),p('triceps',2,10,15,75),p('dbcurl',2,10,12,75),p('plank',2,30,45,60),p('bridge',2,12,15,60)],C:[p('incline',2,10,12,120),p('chestrow',2,10,12,120),p('lateral',2,12,20,75),p('hammer',2,10,12,75),p('triceps',2,10,15,75),p('legpress',2,10,15,120),p('bridge',2,12,15,60),p('crunch',1,12,15,60)]};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function illustration(exercise,phase=0){
 const e=typeof exercise==='string'?exercises[exercise]:exercise;if(!e)return '';
 const end=Number(phase)%2===1;const pattern=e.pattern;
 const line=(a,b,color='#d9e4dd',w=7)=>`<path d="M${a} L${b}" stroke="${color}" stroke-width="${w}" fill="none" stroke-linecap="round"/>`;
 const poly=(pts,color='#d9e4dd',w=7)=>`<polyline points="${pts.map(p=>p.join(',')).join(' ')}" stroke="${color}" stroke-width="${w}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
 const head=(x,y)=>`<circle cx="${x}" cy="${y}" r="12" fill="#d9e4dd"/>`;
 const weight=(x,y)=>`<rect x="${x-10}" y="${y-5}" width="20" height="10" rx="3" fill="#b1ed74"/>`;
 let art='';const bench=`${line([105,90],[105,175],'#47574e',10)}${line([100,175],[165,175],'#47574e',10)}${line([125,175],[125,224],'#47574e',6)}`;
 const seated=`${head(128,75)}${line([127,92],[130,166])}${poly([[130,166],[180,170],[183,220]])}`;
 const stand=`${head(145,48)}${line([145,64],[145,150])}${poly([[145,150],[125,190],[118,224]])}${poly([[145,150],[165,190],[172,224]])}`;
 if(['press','incline','shoulder','lat','row'].includes(pattern)){
  art=bench+seated;
  const hands=pattern==='press'?(end?[221,110]:[151,116]):pattern==='incline'?(end?[206,58]:[151,114]):pattern==='shoulder'?(end?[150,22]:[156,102]):pattern==='lat'?(end?[164,110]:[163,24]):(end?[155,135]:[225,135]);
  const elbow=pattern==='shoulder'?(end?[146,62]:[177,100]):pattern==='lat'?(end?[170,133]:[143,62]):pattern==='row'?(end?[104,130]:[184,118]):(end?[173,102]:[115,137]);
  art+=poly([[130,100],elbow,hands],'#b1ed74')+weight(...hands);
  if(['lat','row'].includes(pattern))art+=line(hands,pattern==='lat'?[163,8]:[268,135],'#718679',2);
 }else if(pattern==='lateral'){
  art=stand+poly([[145,81],end?[105,83]:[125,130],end?[63,85]:[117,165]],'#b1ed74')+poly([[145,81],end?[185,83]:[165,130],end?[227,85]:[173,165]],'#b1ed74')+weight(...(end?[63,85]:[117,165]))+weight(...(end?[227,85]:[173,165]));
 }else if(['curl','triceps'].includes(pattern)){
  const h=pattern==='curl'?(end?[181,92]:[181,177]):(end?[181,177]:[181,92]);
  art=stand+poly([[145,83],[151,127],h],'#b1ed74')+weight(...h);
  if(e.equipment==='Polea')art+=line(h,pattern==='curl'?[245,225]:[245,10],'#718679',2);
 }else if(pattern==='legpress'){
  art=line([75,106],[118,180],'#47574e',12)+head(87,89)+line([93,109],[125,165])+poly([[125,165],end?[177,119]:[144,119],end?[225,73]:[184,93]],'#b1ed74')+line(end?[215,57]:[174,77],end?[240,94]:[199,114],'#718679',10)+line([125,184],[245,70],'#47574e',3);
 }else if(pattern==='squat'){
  art=line([90,165],[151,165],'#47574e',10);
  if(end)art+=head(150,49)+line([150,66],[148,142])+poly([[148,142],[165,185],[162,225]],'#b1ed74')+poly([[150,86],[175,107],[155,113]]);
  else art+=head(147,100)+line([142,117],[119,166])+poly([[119,166],[174,174],[165,225]],'#b1ed74')+poly([[142,128],[169,141],[149,149]]);
 }else if(['legcurl','legext'].includes(pattern)){
  art=bench+head(128,75)+line([127,92],[130,166]);
  const h=pattern==='legext'?(end?[229,173]:[181,222]):(end?[149,210]:[230,173]);
  art+=poly([[130,166],[179,169],h],'#b1ed74')+weight(...h);
 }else if(pattern==='lyingCurl'){
  art=line([70,145],[220,145],'#47574e',10)+head(68,123)+line([86,128],[154,128])+poly([[154,128],[199,129],end?[200,78]:[248,130]],'#b1ed74');
 }else if(pattern==='plank'||pattern==='pushup'){
  const y=pattern==='pushup'?(end?113:145):135;
  art=head(91,y-4)+line([106,y],[202,165])+poly([[202,165],[250,197],[263,211]])+poly([[112,y+3],pattern==='plank'?[115,199]:[116,175],[84,210]],'#b1ed74');
  if(e.id==='kneelingPlank')art=line([0,230],[300,230],'#47574e',2)+head(80,128)+line([96,135],[166,154])+poly([[166,154],[201,210],[237,197]])+poly([[107,140],[107,210],[78,210]],'#b1ed74');
  if(e.id==='highPlank'||e.id==='pushup')art+=line([60,213],[110,213],'#47574e',9);
 }else if(pattern==='bridge'){
  art=head(68,202)+poly([[85,205],end?[146,160]:[146,205],[195,160],[228,211]],'#b1ed74')+line([90,211],[135,211]);
 }else if(pattern==='deadbug'){
  art=head(73,202)+line([90,205],[160,205])+poly([[160,205],end?[209,191]:[166,158],end?[251,196]:[215,158]],'#b1ed74')+poly([[160,205],[155,157],[197,157]])+poly([[101,201],end?[70,161]:[100,151],end?[38,145]:[100,110]],'#b1ed74');
 }else{
  art=head(end?92:69,end?168:200)+line(end?[106,178]:[86,205],[155,205])+poly([[155,205],[201,162],[237,209]])+poly([end?[112,180]:[105,202],end?[137,168]:[132,183],end?[147,183]:[145,198]],'#b1ed74');
 }
 return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 260" role="img" aria-label="${esc(e.name)}: ${end?'movimiento':'posición inicial'}"><rect width="300" height="260" rx="16" fill="#111b17"/><path d="M0 230H300 M30 0V260 M270 0V260" stroke="#25342b" stroke-width="1"/>${art}<text x="16" y="249" fill="#a6b2aa" font-family="sans-serif" font-size="10">${end?'02 · MOVIMIENTO':'01 · POSICIÓN INICIAL'} · ESQUEMA</text></svg>`;
}
