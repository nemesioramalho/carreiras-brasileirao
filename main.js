let indice = []
let ids = []

const options = {
  method: 'GET',
  url: 'https://transfermarket.p.rapidapi.com/clubs/list-by-competition',
  params: {id: 'BRA1'},
  headers: {
    'X-RapidAPI-Key': '4f66dcfc14msh5317e231b13bee6p1ab70cjsn606a1d00e756',
    'X-RapidAPI-Host': 'transfermarket.p.rapidapi.com'
  }
};

axios.request(options).then(response =>{
   
    

}
)
.catch(function (error) {
	console.error(error);
});



async function clubes(){
  
  
  const club = await axios.request(options)
  const club2 = await club.data.clubs
  const club3 = await club2.map((transfer)=> transfer.id)
  //console.log(club2)
  //console.log(club3)
    


  const options2 = {
    method: 'GET',
    url: 'https://transfermarket.p.rapidapi.com/clubs/get-squad',
    params: {id: club3[Math.floor(Math.random() * club3.length)] , saison_id: '2022'},
    headers: {
      'X-RapidAPI-Key': '4f66dcfc14msh5317e231b13bee6p1ab70cjsn606a1d00e756',
      'X-RapidAPI-Host': 'transfermarket.p.rapidapi.com'
    }
  };
  
  axios.request(options2).then( function (response) {
      
    
      async function jogadores(){
        const joga1 = await axios.request(options2)
        const joga2 = await joga1.data.squad
        const joga3 = await joga2.map((transfer)=> transfer.id)
        console.log(joga2)
        console.log(joga3)
        
        async function carreira(){
          function createImageNode(imgSrc){
            var img = document.createElement('img')
            img.src = imgSrc
            return img;
          }
          var btn = document.getElementById('btn')
	        btn.addEventListener('click', confirmar)

          var rnc = document.getElementById('rnc')
	        rnc.addEventListener('click', reiniciar)
          


    
          const options3 = {
            method: 'GET',
            url: 'https://transfermarket.p.rapidapi.com/players/get-transfer-history',
            params: {id: joga3[Math.floor(Math.random() * joga3.length)]},
            headers: {
              'X-RapidAPI-Key': '4f66dcfc14msh5317e231b13bee6p1ab70cjsn606a1d00e756',
              'X-RapidAPI-Host': 'transfermarket.p.rapidapi.com'
            }
          };
            
            const inicio = await axios.request(options3)
            const transfers = inicio.data.transferHistory
            const teamsa = transfers.map((transfer) => transfer.oldClubName)
            const teamsn = transfers.map((transfer) => transfer.newClubName)
            const imagesa = transfers.map((transfer) => transfer.oldClubImage)
            const imagesn = transfers.map((transfer)=> transfer.newClubImage)
            var pn = transfers.map((transfer)=> transfer.playerName)
            const pimg = transfers.map((transfer)=> transfer.playerImage)
            teamsa.unshift(teamsn[0])
            imagesa.unshift(imagesn[0])
            const teamsa2 = teamsa.reverse()
	          const images2 = imagesa.reverse()
            console.log(pn)
            res3.innerHTML = ''
            for (let index = 0; index <= images2.length;index++){
              if(index >= images2.length){
      
                res3.appendChild(createImageNode(images2[index-1]))
                res3.innerHTML += teamsn[0]
              }else if( index < (images2.length - 1)){
                
                res3.appendChild(createImageNode(images2[index]))
                res3.innerHTML += teamsa2[index]
              }	
            }
            function confirmar(){
              let jogador = document.getElementById('txtj')
              jogador.toString()
              console.log(jogador.value)
              console.log(pn[0])
              console.log(pn)
              console.log(typeof pn0)
            console.log(typeof jogador.value)
              if(pn[0] === jogador.value){
                res.innerHTML += 'Correta!'
                
                res2.appendChild(createImageNode(pimg[0]))
            }else{
              res.innerHTML += 'Errada!'
              console.log(pn[0])
              
              
            }
            jogador.focus()
            jogador.value=''
            
            }
            function reiniciar(){
              
              location.reload()
              jogador.focus()
            }
            

                        //Milan
	        for (let index = 0; index < teamsa.length;index++){
		        if(teamsa[index] === 'AC Mailand'){
			      teamsa[index] = 'AC Milan'
			      break
		}
	}
	      for (let index = 0; index < teamsa.length;index++){
		      if(teamsn[index] === 'AC Mailand'){
			    teamsn[index] = 'AC Milan'
			    break
		}
	}

//Inter
      for (let index = 0; index < teamsa.length;index++){
	      if(teamsa[index] === 'Inter Mailand'){
		    teamsa[index] = 'Inter de Milão'
		    break
	}
}

    for (let index = 0; index < teamsa.length;index++){
	    if(teamsn[index] === 'Inter Mailand'){
		  teamsn[index] = 'Inter de Milão'
		  break
	}
}
console.log(pn[0])
            
          
          
          document.addEventListener('keypress', function(e){
            if(e.which == 13){
              confirmar();
            }
            }, false);

        }


        carreira()
      }
      
      jogadores()
      
      

      



  }).catch(function (error) {
      console.error(error);
  });

}
clubes()


 



