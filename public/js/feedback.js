$(()=>{
    $('.feedback-form').submit(e =>{
        e.preventDefault();

        $.post('/api', {
            name: $('#feedback-form-name').val(),
            title: $('#feedback-form-title').val(),
            message: $('#feedback-form-message').val()
        }, updateFeedback)
        
    })
    

    $.getJSON('/api', updateFeedback) 

})

function updateFeedback(data){
        
    let output = '';
    
    data.forEach((item, key) =>{

        

        output += '     <div class="feedback-item item-list media-list">';
        output += '       <div class="feedback-item media">';
        output += `       <div class="media-left"><button onClick="handleDelete(${key})" type="button" class="close" aria-label="Close"><span id="' + ${key} + '" aria-hidden="true"></span>&times;</button></div>`;
        output += '         <div class="feedback-info media-body">';
        output += '           <div class="feedback-head">';
        output += '             <div class="feedback-title">' + item.title + ' <small class="feedback-name label label-info">' + item.name + '</small></div>';
        output += '           </div>';
        output += '           <div class="feedback-message">' + item.message + '</div>';
        output += '         </div>'; 
        output += '       </div>';
        output += '     </div>';
    })

    $('.feedback-messages').html(output)

    
}

async function handleDelete(id){
    const data = await fetch(`/api/delete/${id}`, {method: 'DELETE'})
    const json = await data.json();
    updateFeedback(json)
}


