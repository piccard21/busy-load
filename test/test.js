describe('functions are available', function() {
    before(function() {});
    it('is jquery available', function() {
        expect($).to.be.a('function');
    });
    it('$.fn.busyLoad is a function', function() {
        expect($.fn.busyLoad).to.be.a('function');
    });
    it('$.busyLoadFull is a function', function() {
        expect($.busyLoadFull).to.be.a('function');
    });
    it('$.busyLoadSetup is a function', function() {
        expect($.busyLoadSetup).to.be.a('function');
    });
    it("jQuery is working", function() {
        expect($('body').length).to.be.equal(1);
    });
});
describe('busy-load core', function() {
    it('$.fn.busyLoad.defaults. is same as from $.busyLoadSetup', function() {
    	$.busyLoadSetup({
            color: "green"
        });   
        expect($.fn.busyLoad.defaults.color).to.be.equal('green'); 
    });
    it('$.busyLoadFull("show") without options', function() {
        $.busyLoadFull('show');
        expect($('body>.busy-load-container')).to.exist;
    });
    it('$.busyLoadFull("hide")', function() {
        $.busyLoadFull('hide');
        expect($('body>.busy-load-container')).not.to.exist;
    });
    it('busyLoad("show") without options', function() {
        $('#maskme').busyLoad('show');
        expect($('#maskme>.busy-load-container')).to.exist;
    });
    it('busyLoad("hide")', function() {
        $('#maskme').busyLoad('hide');
        expect($('#maskme>.busy-load-container')).not.to.exist;
    });
    it('caller gets active class', function() {
        $('#maskme').busyLoad('show');
        expect($('#maskme')).to.have.class('busy-load-active'); 
    });
    it('caller removes active class', function() { 
        $('#maskme').busyLoad('hide');
        expect($('#maskme')).not.to.have.class('busy-load-active');
    });
});
describe('busy-load components', function() {
    before(function() {
        $('#maskme').busyLoad('show', {
            text: 'Loading'
        });
    });
    after(function() {
        $('#maskme').busyLoad('hide');
    });
    it('container exists', function() {
        expect($('#maskme>.busy-load-container')).to.exist;
    });
    it('container-item exists', function() {
        expect($('#maskme>.busy-load-container>.busy-load-container-item')).to.exist;
    });
    it('spinner exists', function() {
        expect($('#maskme>.busy-load-container>.busy-load-container-item>.busy-load-spinner')).to.exist;
    });
    it('text exists', function() {
        expect($('#maskme>.busy-load-container>.busy-load-container-item>.busy-load-text')).to.exist;
    });
});
describe('busy-load settings', function() {
    afterEach(function() {
        $('#maskme').busyLoad('hide');
    });
    it('use a custom spinner', function() {
        $('#maskme').busyLoad('show', {
            spinner: 'cube-grid'
        });
        expect($('#maskme .busy-load-spinner')).to.have.class('spinner-cube-grid');
    });
    it('use an image', function() {
        $('#maskme').busyLoad('show', {
            image: 'tardis'
        });
        expect($('#maskme>.busy-load-container img')).to.exist;
    });
    it('use fontawesome', function() {
        $('#maskme').busyLoad('show', {
            fontawesome: 'fa fa-refresh fa-spin fa-2x fa-fw'
        });
        expect($('#maskme>.busy-load-container .fa-refresh')).to.exist;
    });
    it('use a custom element', function() {
        $('#maskme').busyLoad('show', {
            custom: $("<div>", {
                id: "iamcustom"
            })
        });
        expect($('#maskme>.busy-load-container #iamcustom')).to.exist;
    });
    it('set color', function() {
        $('#maskme').busyLoad('show', {
            color: "rgb(0, 0, 255)"
        }); 
        expect($('#maskme  .busy-load-spinner')).to.have.css('color', 'rgb(0, 0, 255)');
    });
    it('set background', function() {
        $('#maskme').busyLoad('show', {
            "background": "rgb(0, 0, 255)"
        });
        expect($('#maskme .busy-load-container')).to.have.css('background-color', 'rgb(0, 0, 255)'); 
    });
    it('set min/maxSize', function() {
        $('#maskme').busyLoad('show', {
            "minSize": "21px",
            "maxSize": "21px",
        });
        expect($('#maskme .busy-load-spinner')).to.have.css('min-width', '21px'); 
        expect($('#maskme .busy-load-spinner')).to.have.css('min-height', '21px'); 
        expect($('#maskme .busy-load-spinner')).to.have.css('max-width', '21px'); 
        expect($('#maskme .busy-load-spinner')).to.have.css('max-height', '21px'); 
    });
    it('text matches', function() {
        $('#maskme').busyLoad('show', {
            "text": "Loading" 
        });
        expect($('#maskme>.busy-load-container>.busy-load-container-item>.busy-load-text').text()).to.contain('Loading');
    });
    it('text matches also text with blanks', function() {
        $('#maskme').busyLoad('show', {
            "text": "Whatever you want" 
        });
        expect($('#maskme .busy-load-text').text()).to.contain('Whatever you want');
    });
    it('set textColor', function() {
        $('#maskme').busyLoad('show', {
            "text": "Loading",
            "textColor": "rgb(0, 21, 255)",
        }); 
        expect($('#maskme .busy-load-text')).to.have.css('color', 'rgb(0, 21, 255)'); 
    });
    it('textColor default is color', function() {
        $.fn.busyLoad.defaults.color = 'rgb(0, 128, 128)';
        $('#maskme').busyLoad('show', {
            "text": "Loading"
        }); 
        expect($('#maskme .busy-load-text')).to.have.css('color', 'rgb(0, 128, 128)');
    });
    it('set textMargin & position', function() {
        $('#maskme').busyLoad('show', {
            "text": "Loading",
            "textPosition": "top",
            "textMargin": "10px",
        }); 
        expect($('#maskme .busy-load-text')).to.have.css('margin-bottom', '10px'); 
    });
    it('set containerClass', function() {
        $('#maskme').busyLoad('show', {
            "containerClass": "something-special", 
        }); 
        expect($('#maskme .something-special')).to.exist;
    });
    it('set containerItemClass', function() {
        $('#maskme').busyLoad('show', {
            "containerItemClass": "something-very-special", 
        }); 
        expect($('#maskme .something-very-special')).to.exist;
    });
    it('set spinnerClass', function() {
        $('#maskme').busyLoad('show', {
            "spinnerClass": "something-very-very-special", 
        }); 
        expect($('#maskme .something-very-very-special')).to.exist;
    });
    it('set textClass', function() {
        $('#maskme').busyLoad('show', {
        	"text": "Loading",
            "textClass": "something-very-very-very-special", 
        }); 
        expect($('#maskme .something-very-very-very-special')).to.exist;
    });
});
describe('busy-load settings with wrong parameters', function() {
  
    var fnAction = function(){
        $('#maskme').busyLoad('action-wrong')
    };
    
    it('wrong action', function() {  
        expect(fnAction).to.throw("don't know action 'action-wrong'"); 
    });

    var fnAnimations = function(){
        $('#maskme').busyLoad('show', {
            animation: "animation-wrong"
        })
    };

    it('wrong animation', function() {  
        expect(fnAnimations).to.throw("don\'t know animation: animation-wrong"); 
    }); 

    var fnTextPos = function(){
        $('#maskme').busyLoad('show', {
            textPosition: "textPosition-wrong"
        })
    };

    it('wrong textPosition', function() {  
        expect(fnTextPos).to.throw("don\'t know textPosition: textPosition-wrong"); 
    }); 

    var fnCustomTag= function(){
        $('#maskme').busyLoad('show', {
            custom: "customEl-wrong"
        })
    };

    it('wrong customTag', function() {  
        expect(fnCustomTag).to.throw("wrong type for creating a tag"); 
    }); 

    var fnSpinner= function(){
        $('#maskme').busyLoad('show', {
            spinner: "spinner-wrong"
        })
    };

    it('wrong spinner', function() {  
        expect(fnSpinner).to.throw("don\'t know spinner: spinner-wrong"); 
    }); 
});