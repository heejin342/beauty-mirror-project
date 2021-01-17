module.exports=function(app){
  //메인페이지
  app.get('/',function(req,res){
    res.render('index.html')
  });

  //색깔 출력 페이지 test
  app.get('/printcolors',function(req,res){
    res.render('printcolors.html');
  });

  app.get('/test',function(req,res){
    res.render('test.html');
  })
  app.get('/capture',function(req,res){
    res.render('capture.html');
  });

  app.get('/analysis',function(req,res){
    res.render('analysis.html');
  });

  app.get('/printcolor_bright',function(req,res){
    res.render('printcolor_bright.html');
  });
  app.get('/printcolor_bright2',function(req,res){
    res.render('printcolor_bright2.html');
  });
  app.get('/printcolor_bright3',function(req,res){
    res.render('printcolor_bright3.html');
  });



  app.get('/printcolor_dark',function(req,res){
    res.render('printcolor_dark.html');
  });
  app.get('/printcolor_dark2',function(req,res){
    res.render('printcolor_dark2.html');
  });
  app.get('/printcolor_dark3',function(req,res){
    res.render('printcolor_dark3.html');
  });



  app.get('/printcolor_darkGrayish',function(req,res){
    res.render('printcolor_darkGrayish.html');
  });
  app.get('/printcolor_darkGrayish2',function(req,res){
    res.render('printcolor_darkGrayish2.html');
  });
  app.get('/printcolor_darkGrayish3',function(req,res){
    res.render('printcolor_darkGrayish3.html');
  });



  app.get('/printcolor_deep',function(req,res){
    res.render('printcolor_deep.html');
  });
  app.get('/printcolor_deep2',function(req,res){
    res.render('printcolor_deep2.html');
  });
  app.get('/printcolor_deep3',function(req,res){
    res.render('printcolor_deep3.html');
  });


  app.get('/printcolor_dull',function(req,res){
    res.render('printcolor_dull.html');
  });
  app.get('/printcolor_dull2',function(req,res){
    res.render('printcolor_dull2.html');
  });
  app.get('/printcolor_dull3',function(req,res){
    res.render('printcolor_dull3.html');
  });



  app.get('/printcolor_grayish',function(req,res){
    res.render('printcolor_grayish.html');
  });
  app.get('/printcolor_grayish2',function(req,res){
    res.render('printcolor_grayish2.html');
  });
  app.get('/printcolor_grayish3',function(req,res){
    res.render('printcolor_grayish3.html');
  });



  app.get('/printcolor_light',function(req,res){
    res.render('printcolor_light.html');
  });
  app.get('/printcolor_light2',function(req,res){
    res.render('printcolor_light2.html');
  });
  app.get('/printcolor_light3',function(req,res){
    res.render('printcolor_light3.html');
  });



  app.get('/printcolor_lightGrayish',function(req,res){
    res.render('printcolor_lightGrayish.html');
  });
  app.get('/printcolor_lightGrayish2',function(req,res){
    res.render('printcolor_lightGrayish2.html');
  });
  app.get('/printcolor_lightGrayish3',function(req,res){
    res.render('printcolor_lightGrayish3.html');
  });



  app.get('/printcolor_pale',function(req,res){
    res.render('printcolor_pale.html');
  });
  app.get('/printcolor_pale2',function(req,res){
    res.render('printcolor_pale2.html');
  });
  app.get('/printcolor_pale3',function(req,res){
    res.render('printcolor_pale3.html');
  });



  app.get('/printcolor_soft',function(req,res){
    res.render('printcolor_soft.html');
  });
  app.get('/printcolor_soft2',function(req,res){
    res.render('printcolor_soft2.html');
  });
  app.get('/printcolor_soft3',function(req,res){
    res.render('printcolor_soft3.html');
  });



  app.get('/printcolor_strong',function(req,res){
    res.render('printcolor_strong.html');
  });
  app.get('/printcolor_strong2',function(req,res){
    res.render('printcolor_strong2.html');
  });
  app.get('/printcolor_strong3',function(req,res){
    res.render('printcolor_strong3.html');
  });



  app.get('/printcolor_vivid',function(req,res){
    res.render('printcolor_vivid.html');
  });
  app.get('/printcolor_vivid2',function(req,res){
    res.render('printcolor_vivid2.html');
  });
  app.get('/printcolor_vivid3',function(req,res){
    res.render('printcolor_vivid3.html');
  });



  app.get('/summermute',function(req,res){

    res.render('summermute.html');

  });
  app.get('/summermute2',function(req,res){

    res.render('summermute2.html');

  });
  app.get('/summermute3',function(req,res){

    res.render('summermute3.html');

  });

  app.get('/summermute4',function(req,res){

    res.render('summermute4.html');

  });
  app.get('/summermute5',function(req,res){

    res.render('summermute5.html');

  });
  app.get('/summermute6',function(req,res){

    res.render('summermute6.html');

  });


  app.get('/springlight',function(req,res){

    res.render('springlight.html');

  });
  app.get('/springlight2',function(req,res){

    res.render('springlight2.html');

  });
  app.get('/springlight3',function(req,res){

    res.render('springlight3.html');

  });

  app.get('/springlight4',function(req,res){

    res.render('springlight4.html');

  });
  app.get('/springlight5',function(req,res){

    res.render('springlight5.html');

  });
  app.get('/springlight6',function(req,res){

    res.render('springlight6.html');

  });

  app.get('/springbright',function(req,res){

    res.render('springbright.html');

  });
  app.get('/springbright2',function(req,res){

    res.render('springbright2.html');

  });
  app.get('/springbright3',function(req,res){

    res.render('springbright3.html');

  });



  app.get('/fallmute',function(req,res){

    res.render('fallmute.html');

  });
  app.get('/fallmute2',function(req,res){

    res.render('fallmute2.html');

  });
  app.get('/fallmute3',function(req,res){

    res.render('fallmute3.html');

  });

  app.get('/fallmute4',function(req,res){

    res.render('fallmute4.html');

  });
  app.get('/fallmute5',function(req,res){

    res.render('fallmute5.html');

  });
  app.get('/fallmute6',function(req,res){

    res.render('fallmute6.html');

  });




  app.get('/summerlight',function(req,res){

    res.render('summerlight.html');

  });
  app.get('/summerlight2',function(req,res){

    res.render('summerlight2.html');

  });
  app.get('/summerlight3',function(req,res){

    res.render('summerlight3.html');

  });



  app.get('/falldeep',function(req,res){

    res.render('falldeep.html');

  });
  app.get('/falldeep2',function(req,res){

    res.render('falldeep2.html');

  });app.get('/falldeep3',function(req,res){

    res.render('falldeep3.html');

  });


  app.get('/winterdeep',function(req,res){

    res.render('winterdeep.html');

  });
  app.get('/winterdeep2',function(req,res){

    res.render('winterdeep2.html');

  });
  app.get('/winterdeep3',function(req,res){

    res.render('winterdeep3.html');

  });

  app.get('/winterdeep4',function(req,res){

    res.render('winterdeep4.html');

  });
  app.get('/winterdeep5',function(req,res){

    res.render('winterdeep5.html');

  });
  app.get('/winterdeep6',function(req,res){

    res.render('winterdeep6.html');

  });



  app.get('/winterclear',function(req,res){

    res.render('winterclear.html');

  });
  app.get('/winterclear2',function(req,res){

    res.render('winterclear2.html');

  });
  app.get('/winterclear3',function(req,res){

    res.render('winterclear3.html');

  });

  app.get('/winterclear4',function(req,res){

    res.render('winterclear4.html');

  });
  app.get('/winterclear5',function(req,res){

    res.render('winterclear5.html');

  });
  app.get('/winterclear6',function(req,res){

    res.render('winterclear6.html');

  });






/*
//이렇게 하면 다음페이지에서 배열로 표시됨
//ex) ["choice5","choice7","choice8"]

  app.get('/new',function(req,res){
    //res.send(req.query.bestColor);//이건 그냥출력문//주석처리해야함!
    //여기서 res.render로 새로운페이지(3개의 천슬라이드를 가진 페이지를 import해주면 그 페이지로 넘어갈 듯하다.)
    //--->new.html

    selected_array=[];
    selected_array=req.query.bestColor;

    console.log(selected_array[0]);
    console.log(selected_array[1]);
    console.log(selected_array[2]);
    res.render('new.html');//됏당..
    console.log('new page');

///////////////////////////////////////////////////////////////
    var paleTone = new Array("#e9b8b8","#e9baaa","#efccaa","#efe0b5","#d8d5a8","#a5ceb6","#9ecdc9","#a5cad7","#a8b7cd","#b7b3cc","#c4afc4","#debbc6");
    var lightTone=new Array("#f28c8e","#ff9e7d","#fcb869","#edd267","#caca61","#83c89c","#3faba4","#52a6bf","#6591c0","#8e87be","#ac7eae","#d98295");
    var brightTone=new Array("#f15d69","#f7774d","#fba52f","#f2d324","#b7bf19","#00b275","#00a39b","#008fb3","#1979ba","#716bb6","#9c5da0","#cc5c87");
    var lightGrayishTone=new Array("#bda2a2","#bda39a","#c7b3a0","#c0b69b","#bab89b","#95afa0","#90aeab","#95acb5","#929caa","#9c99a9","#a497a4","#b9a3aa");
    var softTone=new Array("#c8787a","#d5896f","#d59f62","#ccb664","#aead5f","#66a986","#499b95","#498a9e","#58779a","#756f99","#8b698d","#ae6f85");
    var strongTone=new Array("#c13547","#c7512c","#db8b08","#d2b700","#9aa400","#008a52","#007b75","#006a8b","#005692","#4b488e","#753a7a","#a03663");
    var vividTone=new Array("#cd1f42","#e55125","#f29500","#e2c500","#a4b300","#009a55","#007e77","#006b93","#00569c","#474798","#793580","#ab2664");
    var grayshTone=new Array("#6f5858","#6f5951","#776656","#716951","#6c6a51","#576e61","#536e6c","#4c6068","#4a525e","#52505e","#5a4e5a","#6c585e");
    var dullTone=new Array("#9d5456","#a9634c","#a9783f","#a18e40","#85863c","#418261","#1c7570","#1f6578","#345474","#514d72","#664768","#854c60");
    var deepTone=new Array("#9f1b34","#a53b1b","#aa6600","#a48f00","#717d00","#006f3e","#00625c","#00526f","#004075","#343472","#5a265f","#811f4c");
    var darkGrayishTone=new Array("#3d2f2f","#3d2f2b","#463b30","#423c2d","#3e3d2d","#27362e","#253634","#273439","#242931","#292830","#2e272e","#3c2f33");
    var darkTone=new Array("#642a2e","#6f3826","#704b1a","#6b5e1b","#535617","#185138","#004542","#004252","#14344e","#312e4d","#422944","#5d2d3f");
///////////////////////////////////////////////////////////////
    var num=new Array(); //몇번째 색상코드일지 판단하기위해 숫자만 저장될배열

    for(i=0;i<3;i++){
      if(selected_array[i].length==7){ //choice1~9
        var firstNumber=selected_array[i].substr(6,1);
        firstNumber=Number(firstNumber);
        num[i]=firstNumber;
      }
      else if(selected_array[i].length==8){ //choice10~12
        var lastNumber=selected_array[i].substr(7,3);
        lastNumber=Number(lastNumber);
        lastNumber=lastNumber+10;
        num[i]=lastNumber;
      }
    }
    console.log('!');
    console.log(num[0]);
    console.log(num[1]);
    console.log(num[2]);

    var user_num0=num[0]-1;
    var user_num1=num[1]-1;
    var user_num2=num[2]-1;

    var user_choicedColors=new Array();

//////임시로 pale로 해봄.
    user_choicedColors[0]=paleTone[user_num0];
    user_choicedColors[1]=paleTone[user_num1];
    user_choicedColors[2]=paleTone[user_num2];

    console.log(user_choicedColors[0]);
    console.log(user_choicedColors[1]);
    console.log(user_choicedColors[2]);

//////////////////////////////////////////////////// 선택한거에 따른 색상코드 구하기 끝.
})*/

}
