// JavaScript Document

//********************************************************* 
// 
// 評価するメンバーの名前のリスト ，
// 
// この部分を変更して下さい。名前の削除?追加も可能です。 
// 名前を引用符(")で括り、コンマ(,)で区切って下さい。 
// 但し、リストの最後にはコンマを入れてはいけません。 
// 
//********************************************************* 
var namMember = new Array( 
"乔纳森·乔斯达",
"乔瑟夫·乔斯达",
"空条承太郎",
"东方仗助",
"乔鲁诺·乔巴拿",
"迪奥·布兰度（DIO）",
"卡兹",
"吉良吉影",
"迪亚波罗",
"艾莉娜",
"史比特瓦根",
"齐贝林男爵",
"修特罗海姆",
"西撒",
"莉莎莉莎",
"桑塔纳",
"瓦姆乌",
"ACDC",
"阿布德尔",
"花京院典明",
"波鲁纳雷夫",
"伊奇",
"荷尔·荷斯",
"恩多尔",
"大达比",
"小达比",
"瓦尼拉·艾斯",
"丝吉·Q·乔斯达",
"广濑康一",
"虹村亿泰",
"岸边露伴",
"东尼欧·托拉萨迪",
"山岸由花子",
"杉本铃美",
"川尻浩作",
"布加拉提",
"阿帕基",
"米斯达",
"纳兰迦",
"福葛",
"特里休",
"里苏特",
"普罗修特",
"贝西",
"梅洛尼",
"加丘",

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

//変数の初期化+++++++++++++++++++++++++++++++++++++++++++++ 
function initList(){ 
var n = 0; 
var mid; 
var i; 
namMember.sort(function(a, b){return 0.5 - Math.random()}); 
//ソートすべき配列 
lstMember[n] = new Array(); 
for (i=0; i<namMember.length; i++) { 
lstMember[n][i] = i; 
} 
parent[n] = -1; 
totalSize = 0; 
n++; 

for (i=0; i<lstMember.length; i++) { 
//要素数が２以上なら２分割し、 
//分割された配列をlstMemberの最後に加える 
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

//保存用配列 
for (i=0; i<namMember.length; i++) { 
rec[i] = 0; 
} 
nrec = 0; 

//引き分けの結果を保存するリスト 
//キー：リンク始点の値 
// 値 ：リンク終点の値 
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

//リストのソート+++++++++++++++++++++++++++++++++++++++++++ 
//flag：比較結果 
// -1：左を選択 
// 0：引き分け 
// 1：右を選択  
function sortList(flag){ 
var i; 
var str; 

//recに保存
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

//片方のリストを走査し終えた後の処理 
if (head1<lstMember[cmp1].length && head2==lstMember[cmp2].length) { 
//リストcmp2が走査済 - リストcmp1の残りをコピー 
while (head1<lstMember[cmp1].length){ 
rec[nrec] = lstMember[cmp1][head1]; 
head1++; 
nrec++; 
finishSize++; 
} 
} 
else if (head1==lstMember[cmp1].length && head2<lstMember[cmp2].length) { 
//リストcmp1が走査済 - リストcmp2の残りをコピー 
while (head2<lstMember[cmp2].length){ 
rec[nrec] = lstMember[cmp2][head2]; 
head2++; 
nrec++; 
finishSize++; 
} 
} 

//両方のリストの最後に到達した場合は 
//親リストを更新する 
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

//新しい比較を行う前にrecを初期化 
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

//結果の表示+++++++++++++++++++++++++++++++++++++++++++++++
function showResult() { 
var ranking = 1; 
var sameRank = 1; 
var str = ""; 
var i; 

str += "<table style=\"width:200px; font-size:12px; line-height:120%; margin-left:auto; margin-right:auto; border:1px solid #000; border-collapse:collapse\" align=\"center\">"; 
str += "<tr><td style=\"color:#ffffff; background-color:#000; text-align:center;\">顺序<\/td><td style=\"color:#ffffff; background-color:#000; text-align:center;\">角色名<\/td><\/tr>"; 

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

//比較する２つ要素の表示+++++++++++++++++++++++++++++++++++ 
function showImage() { 
var str0 = "第"+numQuestion+"次比较<br>已经完成了"+Math.floor(finishSize*100/totalSize)+"% "; 
var str1 = ""+toNameFace(lstMember[cmp1][head1]); 
var str2 = ""+toNameFace(lstMember[cmp2][head2]); 

document.getElementById("battleNumber").innerHTML = str0; 
document.getElementById("leftField").innerHTML = str1; 
document.getElementById("rightField").innerHTML = str2; 

numQuestion++; 
} 

//数値を名前（顔文字）に変換+++++++++++++++++++++++++++++++ 
function toNameFace(n){ 
var str = namMember[n]; 

//顔文字を追加する場合は以下のコメントアウトを外す 
//namMemberのインデックスと矛盾しないように注意 
/* 
str += "<br>────<br>"; 
switch(n) { 
//case -1 はサンプルなので削除すること 
case -1: str+="（ ′?｀）";break; 
default: str+=""+n; 
} 
*/ 
return str; 
} 
 