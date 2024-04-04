$(function(){
    $.ajax({
        type: "GET",
        url: "../lab04/RSS.xml",
        dataType: "xml",
        success: function(response, status){
            console.log("hi1")
            let output = `
            <h3>RSS Feed</h3>
            <div>
            `;
            output += $(response).find('title').first().text();
            output += "<br><div class='accordion'>"

            $(response).find('item').each(function(){
                output += `
                    <h3>${$(this).find('title').text()}</h3>
                    <div>
                        <a href="${$(this).find('link').text()}">View Link</a>
                        <p>${$(this).find('description').text()}</p>
                        <p>Published ${$(this).find('pubDate').text()}</p>
                    </div>
                `
            })
            output += '</div>'
            $( "#main" ).append(output)
        }
        
    })
})  


$(function(){
    $.ajax({
        type: "GET",
        url: "../lab04/Atom.xml",
        dataType: "xml",
        success: function(response, status){
            console.log(response)
            let output = `
            <h3>Atom Feed</h3>
            <div>
            `;
            output += $(response).find('title').first().text();
            output += "<br><div class='accordion'>"

            $(response).find('entry').each(function(){
                console.log($(this).find('link').attr('href'))
                output += `
                    <h3>${$(this).find('title').text()}</h3>
                    <div>
                        <a href="${$(this).find('link').attr('href')}">View Link</a>
                        <p>${$(this).find('summary').html()}</p>
                        <p>Published ${$(this).find('updated').text()}</p>
                    </div>
                `
            })
            console.log(output)
            $( "#main" ).append(output)
            $( ".accordion" ).accordion({
                active: false,
                collapsible: true,
                heightStyle: "content"
            });
        }
        
    })
})  