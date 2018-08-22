$(document).ready(() => {

  let var1,var2,var3,var4;
    $("#searchByTitle").click(()=>{
    let var1 =$("#exampleInputtitle1").val();
     if(var1==""){
        alert("please enter title");
     }
     else{
     getAllDetails();
     
 }




});
    $("#searchById").click(()=>{
    let var2 =$("#exampleInputId1").val();
     
      if(var2==""){
        alert("please enter id");
     }
     else{
     getAllDetails();
      $("form").addClass("rmvdsp");
 }

});
    $("#searchByBoth").click(()=>{
        let var3 =$("#exampleInputtitle2").val();
        let var4 =$("#exampleInputYear2").val();
     
      if(var3=="" || var4==""){
        alert("please enter title or year");
     }
     else{
     getAllDetails();
      $("form").addClass("rmvdsp");
 }

});

 
    

});

let getAllDetails=()=>{

    let title =$("#exampleInputtitle1").val();
    console.log(title);
    let id =$("#exampleInputId1").val();
    console.log(id);
    let var3=$("#exampleInputtitle2").val();
    let var4=$("#exampleInputYear2").val();

    let url='https://www.omdbapi.com/?';
    let apikey='&apikey=3e97c69';
   
    if(title!=""){
       url= (url).concat('t='+title);
    }
    if(id!=""){
        url=(url).concat('i='+id);
    }
    if(var3!="" && var4!=""){
        url=(url).concat('t='+var3+'&y='+var4);
    }
    url=url+apikey;
    console.log(url);



    $.ajax({

        type:'GET',
        datatype:'json',
        async:true,
        url:url,
        success:(response) =>{ 
            
            // console.log(response);
            console.log(response.Response);
            let data=response.Response;
            console.log(data);

            if(data=="True"){
                
            $("form").addClass("rmvdsp");
            $("#movieview").removeClass("rmvdsp");
            $("#movieheading").addClass("rmvdsp");
            $(".shortdesc").append(response.Plot);
            $('.genre').append(response.Genre);
            $('.released').append(response.Released);
            $('.year').append(response.Year);
            $('.runtime').append(response.Runtime);
            $('.moviename').html(response.Title);
            for(x of response.Ratings){
              
            $('.ratings').append(x.Source).append(":").append(x.Value);

          }

            $('.rating').append(response.imdbRating);
            $('.imdbid').append(response.imdbID);
            $('.actors').append(response.Actors);
            $('.directors').append(response.Director);
            $('.writer').append(response.Writer);
            $('.production').append(response.Production);
            $('.language').append(response.Language);
            $('.awards').append(response.Awards);
            $('.country').append(response.Country);
            $('.type').append(response.Type);
            $('.boxoffice').append(response.BoxOffice);
            let defimg="sorry.jpg";
            if(response.Poster=="N/A"){
             
              $(".image").html('<img src="'+defimg+'"class="img-fluid">');
            
             }
             else{
              $(".image").html('<img src="'+response.Poster+'" class="img-fluid">');
             } 
             $('#homepage').addClass('rmvdsp');
             $('#goback').removeClass('rmvdsp');
            }
            else
            {
               $("#movienotfound").removeClass("rmvdsp");
                  $("form").addClass("rmvdsp");
                  $('#homepage').addClass('rmvdsp');
             $('#goback').removeClass('rmvdsp');

            }
          
            

        }
        , error: (err) => {

            console.log(err.responseJSON.error.message);
            alert(err.responseJSON.error.message)

        }
    });

}













// $(document).ready(() => {

//     // getAllDetails();
    
//     $("#searchByTitle").click(()=>{
//     $var1 =$("#exampleInputtitle1").val();
//      console.log($var1);

//      $url='http://www.omdbapi.com/?t='+$var1+'&apikey=3e97c69';
     
//      getAllDetails($url);

// });

// });

// let getAllDetails=($url)=>{

//     $.ajax({

//         type:'GET',
//         datatype:'json',
//         async:true,
//         url:$url,
//         success:(data) =>{ 
            
//             console.log(data);

//         }
//     });

// }
