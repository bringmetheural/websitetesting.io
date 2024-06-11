var poverka_table_bool=true;
var techserv_table_bool=true;
var pokazaniya_table_bool=true;
var ins_deinst_table_bool=true;
var sFW_table_bool=true;
var pW_table_bool=true;
var cD_table_bool=true;
var pI_table_bool=true;

document.getElementById(".main_anchor").style.background="red"

function unfixCover(id_name){
    document.getElementById(id_name).style.width="50%";
    document.getElementById(id_name).style.height="auto";
    document.getElementById(id_name).style.top="40%";
}
function fixCover(id_name){
    document.getElementById(id_name).style.width="100%";
    document.getElementById(id_name).style.height="100%";
    document.getElementById(id_name).style.top="0";
}
function openTable(id_name){
    document.getElementById(id_name).style.height="auto";
}
function closeTable(id_name){
    document.getElementById(id_name).style.height="0";
}
function checkAndClose(name){
    if((name!=="poverka")&&(!poverka_table_bool)){
        unfixCover("poverka_cover");
        closeTable("poverka_table_holder");
        poverka_table_bool=true;
    }
    else if((name!=="techserv")&&(!techserv_table_bool)){
        unfixCover("techserv_cover");
        closeTable("techserv_table_holder");
        techserv_table_bool=true;
    }
    else if((name!=="pokazaniya")&&(!pokazaniya_table_bool)){
        unfixCover("pokazaniya_cover");
        closeTable("pokazaniya_table_holder");
        pokazaniya_table_bool=true;
    }
    else if((name!=="ins_deinst")&&(!ins_deinst_table_bool)){
        unfixCover("ins_deinst_cover");
        closeTable("ins_deinst_table_holder");
        ins_deinst_table_bool=true;
    }
    else if((name!=="sFW")&&(!sFW_table_bool)){
        unfixCover("sFW_cover");
        closeTable("sFW_table_holder");
        sFW_table_bool=true;
    }
    else if((name!=="pW")&&(!pW_table_bool)){
        unfixCover("pW_cover");
        closeTable("pW_table_holder");
        pW_table_bool=true;
    }
    else if((name!=="cD")&&(!cD_table_bool)){
        unfixCover("cD_cover");
        closeTable("cD_table_holder");
        cD_table_bool=true;
    }
    else if((name!=="pI")&&(!pI_table_bool)){
        unfixCover("pI_cover");
        closeTable("pI_table_holder");
        pI_table_bool=true;
    }
}
function interactPoverkaTable(){
    if(poverka_table_bool){
        checkAndClose("poverka");
        fixCover("poverka_cover");
        openTable("poverka_table_holder");
        poverka_table_bool=false;
    }
    else{
        unfixCover("poverka_cover");
        closeTable("poverka_table_holder");
        poverka_table_bool=true;
    }
}
function interactTechservTable(){
    if(techserv_table_bool){
        checkAndClose("techserv");
        fixCover("techserv_cover");
        openTable("techserv_table_holder");
        techserv_table_bool=false;
    }
    else{
        unfixCover("techserv_cover");
        closeTable("techserv_table_holder");
        techserv_table_bool=true;
    }
}
function interactPokazaniyaTable(){
    if(pokazaniya_table_bool){
        checkAndClose("pokazaniya");
        fixCover("pokazaniya_cover");
        openTable("pokazaniya_table_holder");
        pokazaniya_table_bool=false;
    }
    else{
        unfixCover("pokazaniya_cover");
        closeTable("pokazaniya_table_holder");
        pokazaniya_table_bool=true;
    }
}
function interactIns_deinstTable(){
    if(ins_deinst_table_bool){
        checkAndClose("ins_deinst");
        fixCover("ins_deinst_cover");
        openTable("ins_deinst_table_holder");
        ins_deinst_table_bool=false;
    }
    else{
        unfixCover("ins_deinst_cover");
        closeTable("ins_deinst_table_holder");
        ins_deinst_table_bool=true;
    }
}
function interactSFWTable(){
    if(sFW_table_bool){
        checkAndClose("sFW");
        fixCover("sFW_cover");
        openTable("sFW_table_holder");
        sFW_table_bool=false;
    }
    else{
        unfixCover("sFW_cover");
        closeTable("sFW_table_holder");
        sFW_table_bool=true;
    }
}
function interactPWTable(){
    if(pW_table_bool){
        checkAndClose("pW_works");
        fixCover("pW_cover");
        openTable("pW_table_holder");
        pW_table_bool=false;
    }
    else{
        unfixCover("pW_cover");
        closeTable("pW_table_holder");
        pW_table_bool=true;
    }
}
function interactCDTable(){
    if(cD_table_bool){
        checkAndClose("cD");
        fixCover("cD_cover");
        openTable("cD_table_holder");
        cD_table_bool=false;
    }
    else{
        unfixCover("cD_cover");
        closeTable("cD_table_holder");
        cD_table_bool=true;
    }
}
function interactPITable(){
    if(pI_table_bool){
        checkAndClose("pI");
        fixCover("pI_cover");
        openTable("pI_table_holder");
        pI_table_bool=false;
    }
    else{
        unfixCover("pI_cover");
        closeTable("pI_table_holder");
        pI_table_bool=true;
    }
}