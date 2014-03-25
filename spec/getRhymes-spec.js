describe("tests for getRhymes", function() {

    var rbModule = require('../lib/index');

    console.log('rbM is ', rbModule);

    xit("returns some data", function(done) {
        return rbModule.getRhymes('train')
            .then(function (d) {
                expect(d).toNotBe(null);
                done();
            });
    });

    xit("returns 10 records", function(done) {
        return rbModule.getRhymes('train', 0, 10)
            .then(function (d) {
                expect(d.length).toBe(10);
                done();
            });
    });

    xit("returns 3 syllable words", function(done) {
        return rbModule.getRhymes('train', 3)
            .then(function (d) {
                expect(d.length).toBeGreaterThan(0);

                if(d.length > 0) {
                    var firstWord = d[0];
                    console.log(firstWord);
                    expect(firstWord.syllables).toBe('3');
                    done();
                }
            });
    });

    xit("gets information about a word", function(done) {
        return rbModule
            .getWord('indestructable')
            .then(function (d) {
                console.log(d);
                expect(d).toNotBe(null);
               done();
            });
    });

    xit("'information' has four syllables", function(done) {
        return rbModule
            .getWord('information')
            .then(function (d) {
                console.log(d);
                expect(d.syllables).toBe('4');
                done();
            });
    });

    xit("'cat' returns some portmanteau's", function(done) {
        return rbModule
            .getPortmanteaus('cat')
            .then(function (d) {
                console.log(d);
                expect(d.length).toBeGreaterThan(0);
                done();
            });
    });

    it("'cat' with maxResults of ten returns ten portmanteau's", function(done) {
        return rbModule
            .getPortmanteaus('cat', 10)
            .then(function (d) {
                console.log(d);
                expect(d.length).toBe(10);
                done();
            });
    });
});