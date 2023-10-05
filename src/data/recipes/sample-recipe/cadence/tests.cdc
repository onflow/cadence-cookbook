import Test

    access(all) fun testExample() {
        Test.assert(2 == 2)
        Test.assert([1, 2, 3].length == 0, message: "Array length is not 0")
    }
    