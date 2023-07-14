

function topClicked() {
    document.getElementById('servicesGridTop').style.opacity = '1';
    document.getElementById('servicesGridMid').style.opacity = '0.5';
    document.getElementById('servicesGridBottom').style.opacity = '0.5';

    let contentReset = document.getElementsByClassName('contentItem');
    for(let i = 0; i< contentReset.length; i++){
        contentReset[i].style.display = 'none';
    }
    document.getElementById('contentTop').style.display = 'flex';
};

function midClicked() {
    document.getElementById('servicesGridTop').style.opacity = '0.5';
    document.getElementById('servicesGridMid').style.opacity = '1';
    document.getElementById('servicesGridBottom').style.opacity = '0.5';
    
    let contentReset = document.getElementsByClassName('contentItem');
    for(let i = 0; i< contentReset.length; i++){
        contentReset[i].style.display = 'none';
    }
    document.getElementById('contentMid').style.display = 'flex';
};

function botClicked() {
    document.getElementById('servicesGridTop').style.opacity = '0.5';
    document.getElementById('servicesGridMid').style.opacity = '0.5';
    document.getElementById('servicesGridBottom').style.opacity = '1';
    
    let contentReset = document.getElementsByClassName('contentItem');
    for(let i = 0; i< contentReset.length; i++){
        contentReset[i].style.display = 'none';
    }
    document.getElementById('contentBot').style.display = 'flex';
};
