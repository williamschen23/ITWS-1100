So I decided that my projects.json should have many different elements, including the individual lab landing pages. So I have a description of lab, and then a list of all the labs, and within each list i open up more jsons to fit each lab. Each lab has a name, description, and some sort of structure. The structure is also a json because I need to know what to name the file and then what it's path relative to the individual lab's page. The Javascript looped through everything and shows the output to the page.

The Page also uses an accordion, so there is a group of <h3> and <div> tags that pair along which each other that shows all of the files. This means that I also had to put the call to the accordion function inside of the ajax function because then the html would be overriden and then the styling would be applied. 

This lab was pretty fun.
