const get = require("lodash/get");

export class SpinnerLib {
    constructor(spinner, busyLoadOptions={}) {
        this._busyLoadOptions = busyLoadOptions;

        switch (spinner.toLowerCase()) {
            case "pump":
                this.createPump();
                break;
            case "pulsar":
                this.createPulsar();
                break;
            case "accordion":
                this.createAccordion();
                break;
            case "cube":
                this.createCube();
                break;
            case "cubes":
                this.createCubes();
                break;
            case "circles":
                this.createCircles();
                break;
            case "circle-line":
                this.createCircleLine();
                break;
            case "cube-grid":
                this.createCubeGrid();
                break;
            default:
                throw `don't know spinner: ${spinner}`
        }
    }
    get spinner() {
        return this._spinner;
    }
    set spinner(spinner) {
        this._spinner = spinner;
    }
    createCubeGrid() {
        this._spinner = $(`<div class="spinner-cube-grid"> 
              <div class="sk-cube sk-cube1"></div>
              <div class="sk-cube sk-cube2"></div>
              <div class="sk-cube sk-cube3"></div>
              <div class="sk-cube sk-cube4"></div>
              <div class="sk-cube sk-cube5"></div>
              <div class="sk-cube sk-cube6"></div>
              <div class="sk-cube sk-cube7"></div>
              <div class="sk-cube sk-cube8"></div>
              <div class="sk-cube sk-cube9"></div>
        </div>`); 
        this._spinner.find(".sk-cube").css({
            "background-color": get(this._busyLoadOptions, "color","#333") 
        });
    }
    createCircleLine() {
        this._spinner = $(`<div class="spinner-circle-line">
              <div class="bounce1"></div>
              <div class="bounce2"></div>
              <div class="bounce3"></div>
        </div>`); 
        this._spinner.find(".bounce1, .bounce2, .bounce3").css({
            "background-color": get(this._busyLoadOptions, "color","#333") 
        });
    }
    createCircles() {
        this._spinner = $(`<div class="spinner-circles">
              <div class="dot1"></div>
              <div class="dot2"></div>
        </div>`); 
        this._spinner.css({
             "margin-right": "0.4rem"
        }).find(".dot1, .dot2").css({
            "background-color": get(this._busyLoadOptions, "color","#333") 
        });
    }
    createPump() {
        this._spinner = $(`<div class="spinner-pump">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>
        </div>`); 

        this._spinner.find(".double-bounce1, .double-bounce2").css({
            "background-color": get(this._busyLoadOptions, "color","#333"),
            "margin-right": "0.9rem"
        });
    }
    createPulsar() {
        this._spinner = $(`<div class="spinner-pulsar"></div>`);
        this._spinner.css({
            "background-color": get(this._busyLoadOptions, "color","#333") 
        });
    }
    createAccordion() {
        this._spinner = $(`<div class="spinner-accordion">
    		  <div class="rect1"></div>
    		  <div class="rect2"></div>
    		  <div class="rect3"></div>
    		  <div class="rect4"></div>
    		  <div class="rect5"></div>
    		</div>`);
        this._spinner.find("div").css({
            "background-color": get(this._busyLoadOptions, "color","#333") 
        });
    }
    createCube() {
        this._spinner = $(`<div class="spinner-cube"></div>`);
        this._spinner.css({
            "background-color": get(this._busyLoadOptions, "color","#333") 
        });
    }
    createCubes() {
        this._spinner = $(`<div class="spinner-cubes">  
            <div class="cube1"></div>
            <div class="cube2"></div>
        </div>`);  

        this._spinner.css({
             "margin-right": "0.9rem"
        }).find(".cube1, .cube2").css({
            "background-color": get(this._busyLoadOptions, "color","#333")
        });
           
    }
}