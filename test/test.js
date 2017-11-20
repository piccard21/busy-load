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
    it('$.busyLoadSetup & $.fn.busyLoad.defaults', function() {
        $.busyLoadSetup({
            color: "green"
        });
        expect($.fn.busyLoad.defaults.color).to.be.equal('green');
    });
    it('$.busyLoadFull("show")', function() {
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
    it('busyLoad("show") set background', function() {
        $('#maskme').busyLoad('show', {
            "background": "rgb(0, 0, 255)"
        });
        expect($('.busy-load-container')).to.have.css('background-color', 'rgb(0, 0, 255)');
        $('#maskme').busyLoad('hide');
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
    // it('caller has active class', function() { 
    //     expect($('#maskme')).to.have.class('busy-load-active');
    // });
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