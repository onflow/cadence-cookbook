export const contract = `//above is more code from the SetAndSeries Contract...

pub resource Admin {

    pub fun addSeries(seriesId: UInt32, metadata: {String: String}) {
        pre {
            SetAndSeries.series[seriesId] == nil:
                "Cannot add Series: The Series already exists"
        }

        // Create the new Series
        var newSeries <- create Series(
            seriesId: seriesId,
            metadata: metadata
        )

        // Add the new Series resource to the Series dictionary in the contract
        SetAndSeries.series[seriesId] <-! newSeries
    }

    pub fun borrowSeries(seriesId: UInt32): &Series  {
        pre {
            SetAndSeries.series[seriesId] != nil:
                "Cannot borrow Series: The Series does not exist"
        }

        // Get a reference to the Series and return it
        return &SetAndSeries.series[seriesId] as &Series
    }

    pub fun createNewAdmin(): @Admin {
        return <-create Admin()
    }

}

//below is more from the SetAndSeries Contract


.....
//the following code is used in init() at the end of the contract

// Put Admin in storage
self.account.save(<-create Admin(), to: self.AdminStoragePath)

self.account.link<&SetAndSeries.Admin>(
    self.AdminPrivatePath,
    target: self.AdminStoragePath
) ?? panic("Could not get a capability to the admin")
`