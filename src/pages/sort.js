import { useState, useEffect } from "react"
import { Card } from "react-bootstrap";

const bands = [
    {
        name: 'nightwish',
        albums: 9,
        members: 6,
        formed_in: 1996,
        id: 1
    },
    {
        name: 'metallica',
        albums: 10,
        members: 4,
        formed_in: 1981,
        id: 2
    },
    {
        name: 'nirvana',
        albums: 3,
        members: 3,
        formed_in: 1987,
        id: 3
    },
];

export default function Sort() {
    const [error, setError] = useState(null)
    const [data, setData] = useState([])
    const [sortType, setSortType] = useState('albums');

    useEffect(() => {

        const sortArray = type => {
            const types = {
                albums: 'albums',
                members: 'members',
                formed: 'formed_in',
            };
            const sortProperty = types[type];
            const sorted = [...bands].sort((a, b) => b[sortProperty] - a[sortProperty]);
            console.log(sorted)
            setData(sorted)
        };
        sortArray(sortType)
    },[sortType]);

    const [q, setQ] = useState("");
    const [searchParam] = useState(["albums", "members", "formed_in"]);

    function search(items) {
        return items.filter((item) => {
            return searchParam.some((newItem) => {
                return (
                    item[newItem]
                    .toString()
                    .toLowerCase()
                    .indexOf(q.toLowerCase()) > -1
                )
            })
        })
    }
    // if (error) {
    //     return <>{error.message}</>
    // } else {
    //     return (
    //         <div>

    //         </div>
    //     )
    // }

//  only show if array contains name
const dumFilt = data.filter(la => {
    if (la.name.includes(q)) {
        return la.name
    }
})


    return (
        <>
        <Card className="m-5 p-5">

<h5>Show by:</h5>
       <select onChange={(e) => setSortType(e.target.value)} name="" id="">
       <option value="albums">Number of Albums</option>
       <option value="members">Number of Members</option>
       <option value="formed">Year Formed in</option>
       </select>
            <h5>shows by field</h5>
<input type="search" name="search-form" id="search-form" placeholder="search..." value={q} onChange={(e) => setQ(e.target.value)} />

{dumFilt.map(eeee => {
    return <li key={eeee.id}>{eeee.name}</li>
})}
</Card>


{/* {data.filter(f => f.includes(q) || q === '')
.map(f => <li key={f}>{f}</li>)
} */}
        


{/* {data.filter(dum => dum
    .includes('M'))
    .map((band) => (
        <div key={band.id} style={{margin:'30px'}}>
            <div>{`Band: ${band.name}`}</div>
            <div>{`Albums: ${band.albums}`}</div>
            <div>{`Members: ${band.members}`}</div>
            <div>{`Year founded: ${band.formed_in}`}</div>
        </div>
    )
)
} */}

<p>
filter by number of members
    {data.filter(a => a.members >0).map(f => ( <li>{f.members}</li>))}
</p>

<p>
{data.includes('nirvana') ? 'is' : 'is not'}
</p>

<p>
bands with less than 5 members
</p>
{data.filter(it => it.members < 5).map(band => (
    <li>{band.name}</li>
))}


           {data.map(band => (
               <div key={band.id} style={{margin:'30px'}}>
                   <div>{`Band: ${band.name}`}</div>
                   <div>{`Albums: ${band.albums}`}</div>
                   <div>{`Members: ${band.members}`}</div>
                   <div>{`Year founded: ${band.formed_in}`}</div>
               </div>
           ))} 
        </>
    )
}
