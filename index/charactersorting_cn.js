// JavaScript Document

//********************************************************* 
// 
// �u��������Щ`����ǰ�Υꥹ�� ��
// 
// ���β��֤��������¤�������ǰ������?׷�Ӥ���ܤǤ��� 
// ��ǰ�����÷�(")�����ꡢ�����(,)�����Фä��¤����� 
// �������ꥹ�Ȥ�����ˤϥ���ޤ����ƤϤ����ޤ��� 
// 
//********************************************************* 
var namMember = new Array( 
"����ɭ����˹��",
"��ɪ����˹��",
"������̫��",
"��������",
"��³ŵ���ǰ���",
"�ϰ¡������ȣ�DIO��",
"����",
"������Ӱ",
"���ǲ���",
"������",
"ʷ�����߸�",
"�뱴���о�",
"�����޺�ķ",
"����",
"��ɯ��ɯ",
"ɣ����",
"��ķ��",
"ACDC",
"�����¶�",
"����Ժ����",
"��³���׷�",
"����",
"�ɶ�����˹",
"�����",
"����",
"С���",
"����������˹",
"˿����Q����˹��",
"������һ",
"�����̩",
"����¶��",
"����ŷ����������",
"ɽ���ɻ���",
"ɼ������",
"�������",
"��������",
"������",
"��˹��",
"������",
"����",
"������",
"������",
"��������",
"����",
"÷����",
"����",

); 
//********************************************************* 

var lstMember = new Array(); 
var parent = new Array(); 
var equal = new Array(); 
var rec = new Array(); 
var cmp1,cmp2; 
var head1,head2; 
var nrec; 

var numQuestion; 
var totalSize; 
var finishSize; 
var finishFlag; 

//�����γ��ڻ�+++++++++++++++++++++++++++++++++++++++++++++ 
function initList(){ 
var n = 0; 
var mid; 
var i; 
namMember.sort(function(a, b){return 0.5 - Math.random()}); 
//���`�Ȥ��٤����� 
lstMember[n] = new Array(); 
for (i=0; i<namMember.length; i++) { 
lstMember[n][i] = i; 
} 
parent[n] = -1; 
totalSize = 0; 
n++; 

for (i=0; i<lstMember.length; i++) { 
//Ҫ�����������Ϥʤ飲�ָ�� 
//�ָ�줿���Ф�lstMember������˼Ӥ��� 
if(lstMember[i].length>=2) { 
mid = Math.ceil(lstMember[i].length/2); 
lstMember[n] = new Array(); 
lstMember[n] = lstMember[i].slice(0,mid); 
totalSize += lstMember[n].length; 
parent[n] = i; 
n++; 
lstMember[n] = new Array(); 
lstMember[n] = lstMember[i].slice(mid,lstMember[i].length); 
totalSize += lstMember[n].length; 
parent[n] = i; 
n++; 
} 
} 

//���������� 
for (i=0; i<namMember.length; i++) { 
rec[i] = 0; 
} 
nrec = 0; 

//�����֤��νY���򱣴椹��ꥹ�� 
//���`�����ʼ��΂� 
// �� ����󥯽K��΂� 
for (i=0; i<=namMember.length; i++) { 
equal[i] = -1; 
} 

cmp1 = lstMember.length-2; 
cmp2 = lstMember.length-1; 
head1 = 0; 
head2 = 0; 
numQuestion = 1; 
finishSize = 0; 
finishFlag = 0; 
} 

//�ꥹ�ȤΥ��`��+++++++++++++++++++++++++++++++++++++++++++ 
//flag�����^�Y�� 
// -1������x�k 
// 0�������֤� 
// 1���Ҥ��x�k  
function sortList(flag){ 
var i; 
var str; 

//rec�˱���
if (flag<0) { 
rec[nrec] = lstMember[cmp1][head1]; 
head1++; 
nrec++; 
finishSize++; 
while (equal[rec[nrec-1]]!=-1) { 
rec[nrec] = lstMember[cmp1][head1]; 
head1++; 
nrec++; 
finishSize++; 
} 
} 
else if (flag>0) { 
rec[nrec] = lstMember[cmp2][head2]; 
head2++; 
nrec++; 
finishSize++; 
while (equal[rec[nrec-1]]!=-1) { 
rec[nrec] = lstMember[cmp2][head2]; 
head2++; 
nrec++; 
finishSize++; 
} 
} 
else { 
rec[nrec] = lstMember[cmp1][head1]; 
head1++; 
nrec++; 
finishSize++; 
while (equal[rec[nrec-1]]!=-1) { 
rec[nrec] = lstMember[cmp1][head1]; 
head1++; 
nrec++; 
finishSize++; 
} 
equal[rec[nrec-1]] = lstMember[cmp2][head2]; 
rec[nrec] = lstMember[cmp2][head2]; 
head2++; 
nrec++; 
finishSize++; 
while (equal[rec[nrec-1]]!=-1) { 
rec[nrec] = lstMember[cmp2][head2]; 
head2++; 
nrec++; 
finishSize++; 
} 
} 

//Ƭ���Υꥹ�Ȥ��ߖˤ��K������΄I�� 
if (head1<lstMember[cmp1].length && head2==lstMember[cmp2].length) { 
//�ꥹ��cmp2���ߖ˜g - �ꥹ��cmp1�βФ�򥳥ԩ` 
while (head1<lstMember[cmp1].length){ 
rec[nrec] = lstMember[cmp1][head1]; 
head1++; 
nrec++; 
finishSize++; 
} 
} 
else if (head1==lstMember[cmp1].length && head2<lstMember[cmp2].length) { 
//�ꥹ��cmp1���ߖ˜g - �ꥹ��cmp2�βФ�򥳥ԩ` 
while (head2<lstMember[cmp2].length){ 
rec[nrec] = lstMember[cmp2][head2]; 
head2++; 
nrec++; 
finishSize++; 
} 
} 

//�I���Υꥹ�Ȥ�����˵��_�������Ϥ� 
//�H�ꥹ�Ȥ���¤��� 
if (head1==lstMember[cmp1].length && head2==lstMember[cmp2].length) { 
for (i=0; i<lstMember[cmp1].length+lstMember[cmp2].length; i++) { 
lstMember[parent[cmp1]][i] = rec[i]; 
} 
lstMember.pop(); 
lstMember.pop(); 
cmp1 = cmp1-2; 
cmp2 = cmp2-2; 
head1 = 0; 
head2 = 0; 

//�¤������^���Ф�ǰ��rec����ڻ� 
if (head1==0 && head2==0) { 
for (i=0; i<namMember.length; i++) { 
rec[i] = 0; 
} 
nrec = 0; 
} 
} 

if (cmp1<0) { 
str = "Battle No."+(numQuestion-1)+"<br>"+Math.floor(finishSize*100/totalSize)+"% sorted."; 
document.getElementById("battleNumber").innerHTML = str; 

showResult(); 
finishFlag = 1; 
} 
else { 
showImage(); 
} 
} 

//�Y���α�ʾ+++++++++++++++++++++++++++++++++++++++++++++++
function showResult() { 
var ranking = 1; 
var sameRank = 1; 
var str = ""; 
var i; 

str += "<table style=\"width:200px; font-size:12px; line-height:120%; margin-left:auto; margin-right:auto; border:1px solid #000; border-collapse:collapse\" align=\"center\">"; 
str += "<tr><td style=\"color:#ffffff; background-color:#000; text-align:center;\">˳��<\/td><td style=\"color:#ffffff; background-color:#000; text-align:center;\">��ɫ��<\/td><\/tr>"; 

for (i=0; i<namMember.length; i++) { 
str += "<tr><td style=\"border:1px solid #000; text-align:right; padding-right:5px;\">"+ranking+"<\/td><td style=\"border:1px solid #000; padding-left:5px;\">"+namMember[lstMember[0][i]]+"<\/td><\/tr>"; 
if (i<namMember.length-1) { 
if (equal[lstMember[0][i]]==lstMember[0][i+1]) { 
sameRank++; 
} else { 
ranking += sameRank; 
sameRank = 1; 
} 
} 
} 
str += "<\/table>"; 

document.getElementById("resultField").innerHTML = str; 
} 

//���^���룲��Ҫ�ؤα�ʾ+++++++++++++++++++++++++++++++++++ 
function showImage() { 
var str0 = "��"+numQuestion+"�αȽ�<br>�Ѿ������"+Math.floor(finishSize*100/totalSize)+"% "; 
var str1 = ""+toNameFace(lstMember[cmp1][head1]); 
var str2 = ""+toNameFace(lstMember[cmp2][head2]); 

document.getElementById("battleNumber").innerHTML = str0; 
document.getElementById("leftField").innerHTML = str1; 
document.getElementById("rightField").innerHTML = str2; 

numQuestion++; 
} 

//��������ǰ������֣��ˉ�Q+++++++++++++++++++++++++++++++ 
function toNameFace(n){ 
var str = namMember[n]; 

//����֤�׷�Ӥ�����Ϥ����¤Υ����ȥ����Ȥ��⤹ 
//namMember�Υ���ǥå�����ì�ܤ��ʤ��褦��ע�� 
/* 
str += "<br>��������<br>"; 
switch(n) { 
//case -1 �ϥ���ץ�ʤΤ��������뤳�� 
case -1: str+="�� ��?�ࣩ";break; 
default: str+=""+n; 
} 
*/ 
return str; 
} 
 