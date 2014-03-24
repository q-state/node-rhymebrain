describe("tests for getRhymes", function() {

    var rbModule = require('../lib/index.js');

    it("returns some data", function(done) {
        return rbModule.getRhymes('train')
            .then(function (d) {
                expect(d).toNotBe(null);
                done();
            });
    });

    it("returns 10 records", function(done) {
        return rbModule.getRhymes('train', 10)
            .then(function (d) {
                expect(d.length).toBe(10);
                done();
            });
    });

    it("returns 3 syllable words", function(done) {
        return rbModule.getRhymes('train', null, 3)
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
});