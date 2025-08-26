document.getElementById('btn-update-title')
    .addEventListener('click', function () {
        // console.log('btn clicked')
        const pageTitleElement = document.getElementById('page-title');
        console.log(pageTitleElement);
        pageTitleElement.innerText = 'Updated page title text.'
    })


document.getElementById('btn-login')
    .addEventListener('click', function () {
        const userInfoEl = document.getElementById('user-info');
        userInfoEl.innerText = 'user logged In successfully'
    })

    document.getElementById('btn-sign-in')
    .addEventListener('click', function(){
        const userInformation = document.getElementById('user-information');
        userInformation.innerText = 'sign in successfully'
    })

    document.getElementById('btn-click')
    .addEventListener('click',function(){
        const addEventListeners = document.getElementById('use-add-even-listener');
        addEventListeners.innerText = 'chenge paragraph elements'
    })


      