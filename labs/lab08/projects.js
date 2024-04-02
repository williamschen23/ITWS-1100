$(function(){
    $.ajax({
        type: "GET",
        url: "./lab08/projects.json",
        success: function(response, status){
            let output = '';
            $.each(response.labs, function(){
                let index = this.name.indexOf('0');
                let labNumber = 'L' + this.name.substring(1, index) 
                            + " " + this.name.substring(index+1);
                let folderName = this.name;

                let structureMap = "";
                $.each(this.structure, function(key, value){
                    let filePath = `./${folderName}/${value}`;
                    structureMap += `<li><a href="${filePath}">${key}</a></li>`
                })
                structureMap += `<li><a href="./${this.name}/README.md">README.md</a></li>`
                
                output +=
                    `
                        <h3>${labNumber}</h3>
                        <div>
                            ${this.description}
                            <ul>
                                ${structureMap}
                            </ul>
                        </div>
                    `
            })
            $( "#accordion" ).html(output)
           
            $( "#accordion" ).accordion({
		active: false,
		collapsible: true,
                heightStyle: "content"
            });
        }
        
    })
})  
