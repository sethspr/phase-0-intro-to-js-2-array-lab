//Always make sure the arugument (name) is the same in the fuction line and the function itself.
//Remember for the most part we need to return 'something' (i.e. cats).

//Test File, read the first line 'describe' keyword, where the test is calling. In this case it told us the argument as well. 

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {

    cats.push(name)
    return cats

}

function destructivelyPrependCat(name) {

    cats.unshift(name)
    return cats
}

function destructivelyRemoveLastCat(name) {

    cats.pop(name)
    return cats
}

function destructivelyRemoveFirstCat(name) {

    cats.shift(name)
    return cats
}

const preCats = [...cats]
const apCats = [...cats]

function appendCat(name) {

    apCats.push(name)
  return apCats 
}

function prependCat(name) {

    preCats.unshift(name)
    return preCats 
}

// I ran into an issue where two functions were changing the same array 'deletedCats'
// This caused data to change that I did not expect. 
// Solution is to make a clean copy of a cats array for each function 'deletedCats' vs 'happyCats'
// This applied to lines 28 & 29 as well as 48 & 49.

const deletedCats = cats.slice()
const happyCats = cats.slice()

function removeLastCat() {

  deletedCats.pop()
  return deletedCats 

}

function removeFirstCat() {

    happyCats.shift()
    return happyCats 
  
  }

 // TEST FILES - IF 2 EXPECTATIONS, REMOVE ONE OF THE LINES FROM THE TEST FILE (I.E. LINES 74 OR 76 HERE. )
 
//  describe('removeFirstCat()', function () {
//     it('removes the first cat from the cats array and returns a new array, leaving the cats array unchanged', function () {
//       expect(removeFirstCat()).to.have.ordered.members(["Otis", "Garfield"]);

//       expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
  
