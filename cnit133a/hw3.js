<!-- Name: Keli Wu; Date: 09/17/2023  -->

var svg = d3.select("svg");

d3.json("hw3data.json")
    .then(function(data) {
        var tooltip = d3.select('body').append('div')
            .style('position', 'absolute')
            .style('padding', '0 8px')
            .style('background', 'white')
            .style('opacity', 0)
            .style('color', 'black')
            .style('font-size', '10px');

        var margin = { top: 20, right: 30, bottom: 40, left: 50};

        var h = 200 - margin.top - margin.bottom,
            w = 400 - margin.left - margin.right;

        // var verticalGuide = d3.scaleLinear()
        //     .domain([0, d3.max(data, d => d.students)])
        //     .range([h, 0]);

        var yS = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.students)])
            .range([h, 0]);

        var xS = d3.scaleBand()
            .domain(data.map(d => d.term))
            .range([0, w])
            .padding(0.1);

        var g = d3.select("#chart")
            .append('svg')
            .attr('width', w + margin.left + margin.right)
            .attr('height', h + margin.top + margin.bottom)
            .style('background', 'lightgrey')
            .append('g')
            .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

        g.append("g")
            // .call(d3.axisLeft(yS).scale(verticalGuide));
            .call(d3.axisLeft(yS));

        g.append("g")
            .call(d3.axisBottom(xS))
            .attr('transform', 'translate(0, ' + h + ')');

        g.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => xS(d.term))
            .attr("y", d => yS(d.students))
            .attr("width", xS.bandwidth())
            .attr("height", d => h - yS(d.students))
            .classed("chart rect", true)

            .on('mouseover', function(event, d) {
                const[x, y] = d3.pointer(event)
                tooltip.transition()
                    .style('opacity', 0.8)

                tooltip.html(`Term: ${d.term}<br>Students: ${d.students}`)
                    .style('left', (x + 5) + 'px')
                    .style('top', (y + 10) + 'px')
                d3.select(this)
                    .style('opacity', 0.4)
            })
            .on('mouseout', function() {
                d3.select(this)
                    .style('opacity', 1)
            });

        g.append("g")
            .append("text")
            .attr("transform", "translate (-30, 30) rotate(-90)")
            .attr("stroke", "darkblue")
            .classed("axis text", true)
            .text("Number of students");

        g.append("g")
            .append("text")
            .attr("transform", "translate(160," + 170 + ")")
            .attr("stroke", "darkblue")
            .classed("axis text", true)
            .text("Term");

    })
    .catch(function (error) {
        console.error("Error reading file: " + error);
    });






