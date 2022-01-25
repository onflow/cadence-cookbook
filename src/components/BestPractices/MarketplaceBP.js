import axios from 'axios';
import React, { useEffect } from 'react';
import { NotionRenderer } from 'react-notion';
import { useState } from 'react/cjs/react.development';
import "react-notion/src/styles.css"



function MarketplaceBP(props) {
    const [recordMap, setRecordMap] = useState()


    useEffect(() =>{
        axios.get('https://notion-api.splitbee.io/v1/page/Flow-Marketplace-Best-Practices-8ef9de16653a42a0969d12da4bea1461')
        .then(res => setRecordMap(res.data))
    }, [setRecordMap])

    console.log(recordMap)
    return (
        <div className="text-left">
            {recordMap == (undefined || null)  ? <></> :   <NotionRenderer blockMap={recordMap} fullPage={true} darkMode={false} />}
        </div>
    );
}

export default MarketplaceBP;