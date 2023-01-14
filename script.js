let moreCard = document.querySelectorAll('.more')
let viewMoreBtn = document.getElementById('viewmore');

viewMoreBtn.addEventListener('click', function(){
    moreCard.forEach(function(card){
        card.style.display = 'block'
    })
})

