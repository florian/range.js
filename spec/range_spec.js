describe('range', function () {
    it('is in the global scope', function () {
        expect(window).to.have.property('range');
    });

    // Number ranges

    it('is able to create positive number ranges', function () {
        expect(range(1, 5)).to.eql([1, 2, 3, 4, 5]);
        expect(range(20, 22)).to.eql([20, 21, 22]);
    });

    it('is able to create negative number ranges', function () {
        expect(range(-2, 2)).to.eql([-2, -1, 0, 1, 2]);
    });

    it('is able to create reversed number ranges', function () {
        expect(range(2012, 2006)).to.eql(range(2006, 2012).reverse());
    });

    it('is able to create number ranges with steps', function () {
        expect(range(0, 4, 2)).to.eql([0, 2, 4]);
        expect(range(-9, 0, 3)).to.eql([-9, -6, -3, 0]);
    });

    // Letter ranges

    it('is able to create lower case letter ranges', function () {
        expect(range('a', 'd')).to.eql(['a', 'b', 'c', 'd']);
        expect(range('e', 'g')).to.eql(['e', 'f', 'g']);
    });

    it('is able to create upper case letter ranges', function () {
        expect(range('A', 'D')).to.eql(['A', 'B', 'C', 'D']);
        expect(range('E', 'G')).to.eql(['E', 'F', 'G']);
    });

    it('is able to create mixed case letter ranges', function () {
        expect(range('Y', 'b')).to.eql(['Y', 'Z', 'a', 'b']);
        expect(range('y', 'B')).to.eql(['y', 'z', 'A', 'B']);
    });

    it('is able to create reversed letter ranges', function () {
        expect(range('z', 'a')).to.eql(range('a', 'z').reverse());
        expect(range('F', 'A')).to.eql(range('A', 'F').reverse());
    });

    it('is able to create letter ranges with steps', function () {
        expect(range('a', 'f', 2)).to.eql(['a', 'c', 'e']);
        expect(range('A', 'F', 2)).to.eql(['A', 'C', 'E']);
    });

    // Ruby style ranges

    it('is able to create the same number ranges using the ruby style syntax', function () {
        expect(range('1..5')).to.eql(range(1, 5));
        expect(range('20..22')).to.eql(range(20, 22));
        expect(range('-2..2')).to.eql(range(-2, 2));
    });

    it('is able to create the same letter ranges using the ruby style syntax', function () {
        expect(range('a..z')).to.eql(range('a', 'z'));
        expect(range('A..Z')).to.eql(range('A', 'Z'));
        expect(range('A..z')).to.eql(range('A', 'z'));
        expect(range('a..Z')).to.eql(range('a', 'Z'));
    });

    it('is able to create exclusive number ranges using the ruby style syntax', function () {
        expect(range('0...10')).to.eql(range('0..9'));
    });

    it('is able to create exclusive letter ranges using the ruby style syntax', function () {
        expect(range('a...z')).to.eql(range('a..y'));
    });

    it('is able to create ruby style syntax ranges with steps', function () {
        expect(range('a..z', 2)).to.eql(range('a', 'z', 2));
        expect(range('0..9', 3)).to.eql(range(0, 9, 3));
    });

    describe('overlaps', function () {
        it('returns true when ranges overlap', function () {
            expect(range.overlaps(range(1, 5), range(2, 6))).to.be.true;
            expect(range.overlaps(range(2, 6), range(1, 5))).to.be.true;
            expect(range.overlaps(range('a..z'), range('e..f'))).to.be.true;
            expect(range.overlaps(range('e..f'), range('a..z'))).to.be.true;
        });

        it("returns false when ranges don't overlap", function () {
            expect(range.overlaps(range(1, 5), range(6, 10))).to.be.false;
        });
    });
});