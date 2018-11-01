<template>
<div style="height : 100vh">
  <div class="pagecontainer">
    <div class="leftpane">
      <div></div>
    </div>
    <div class="centerpane">
      <nuxt/>
    </div>
    <div class="rightpane">
      <div  style="color:#777676">CHRYSALIS</div>
      <div class="image"></div>
    </div>
  </div>
  <div class="footers">
    Powered by &nbsp;<span style="color:#777676"> chrysalis </span>&nbsp;@ Infosys
  </div>
</div> 
</template>
<style>

body{
  margin: 0;
  background-color: #cccccc;
  box-sizing: border-box;
  font-family: sans-serif;
}

.individualfloors{ 
  text-align: center;
  color:white;
}
.individualfloors div:nth-child(2) {
  /* padding-top : 5vh; */
}

.footers{

  position: absolute;
  bottom: 0;
  transform: translate(-46%,-50%);
  display: flex;
  left: 50%;
}
.leftpane{
  height: 50px;
  width: 189px;

}
.rightpane .image{
  height: 150px;
  width: 160px;
}
.leftpane,.rightpane .image{
  background-size: 100%;
  background-repeat: no-repeat;
}
.pagecontainer{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80%;
}
.leftpane{
  background-image: url("/static/images/infylogo.png");
background-size: 145%;
}
.rightpane{
  display: flex;
  flex-direction: column;
  align-items: center;

}
.rightpane div:nth-child(1){
  /* font-size: 25px; */
}
.rightpane .image{
  background-image: url("/static/images/Chrysalis.png");
}
.centerpane{
  /* display: flex; */

}

.individualfloors .floor div:nth-child(1){
  display: flex;
  align-items: flex-end;
  margin-right: 40px;
}
.individualfloors .floor div:nth-child(1),
.individualfloors .slots div:nth-child(1){
  /* padding-bottom: 4%; */
  color: #0079c4;
  font-size: 50px;
}

.individualfloors .slots div:nth-child(1){
  margin-bottom: 30px;
}

.individualfloors .floor ,
.individualfloors .slots{
font-size: 85px;
}

.individualfloors .floor{
  /* margin-bottom: 6%; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}
.individualfloors .slots{

}
.footers,.rightpane div:nth-child(1){
  font-size: 15px;
  color:#0079c4;
  font-weight: 500;
}
</style>
