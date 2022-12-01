            function randomIntFromInterval(min, max) 
            { 
                return Math.floor(Math.random() * (max - min + 1) + min)
            
            }
            
            function createShape(className) 
            {
                let k = document.querySelector("input").value;
                
                for (let i = 0; i < k; ++i) 
                {
                    let figure = document.createElement("div");
                    figure.classList = className;
                    if (className === "Triangle") 
                    {
                        figure.style.borderLeft = randomIntFromInterval(130, 180) + "px solid transparent";
                        figure.style.borderRight = figure.style.borderLeft;
                        figure.addEventListener("click", e => e.target.style.borderBottom = "100px solid rgba(255, 255, 0, 0.8)");
                    } 

                    else 
                    {
                        figure.style.height = randomIntFromInterval(130, 180) + "px";
                        figure.style.width = figure.style.height;
                        figure.addEventListener("click", e => e.target.style.background="rgba(255, 255, 0, 0.8)");

                    }
                    
                    figure.style.top = randomIntFromInterval(50, 500) + "px";
                    figure.style.left = randomIntFromInterval(10, document.documentElement.clientWidth - 200) + "px";
                    canvas.appendChild(figure);
                    
                    
                    figure.addEventListener("dblclick", e => e.target.remove())
                }                    
            }
            
            let canvas = document.getElementById("canvas");
            
            document.getElementById("Rectangle").addEventListener("click", e => 
            {
                createShape("Rectangle")})
            document.getElementById("Triangle").addEventListener("click", e => 
            {
                createShape("Triangle")})
            document.getElementById("Circle").addEventListener("click", e => 
            {
                createShape("Circle")})