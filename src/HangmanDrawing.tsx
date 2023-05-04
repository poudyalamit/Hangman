const HEAD = (
    <div style={{
        width: "50px", height: "50px", borderRadius: "100%"
        , position: "absolute", top: "50px", border: "10px solid black", right: "-30px"
    }}></div>
)
const BODY = (
    <div style={{
        width: "10px", height: "100px"
        , position: "absolute", top: "120px", background: "black", right: "0px"
    }}></div>
)
const RIGHT_ARM = (
    <div style={{
        width: "100px", height: "10px"
        , position: "absolute", top: "150px", background: "black", right: "-100px",rotate:"-30deg",transformOrigin:"left bottom"
    }}></div>
)
const LEFT_ARM = (
    <div style={{
        width: "100px", height: "10px"
        , position: "absolute", top: "150px", background: "black", right: "10px",rotate:"30deg",transformOrigin:"right bottom"
    }}></div>
)
const RIGHT_LEG = (
    <div style={{
        width: "100px", height: "10px"
        , position: "absolute", top: "210px", background: "black", right: "-90px",rotate:"60deg",transformOrigin:"left bottom"
    }}></div>
)
const LEFT_LEG = (
    <div style={{
        width: "100px", height: "10px"
        , position: "absolute", top: "210px", background: "black", right: "0px",rotate:"-60deg",transformOrigin:"right bottom"
    }}></div>
)


export function HangmanDrwaing() {
    return <div style={{ position: "relative" }}>
        {HEAD}
        {BODY}
        {RIGHT_ARM}
        {LEFT_ARM}
        {RIGHT_LEG}
        {LEFT_LEG}
        <div style={{ height: "50px", width: "10px", background: "black", top: "0", right: "0", position: "absolute" }} />
        <div style={{ height: "10px", width: "200px", background: "black", marginLeft: "120px" }} />
        <div style={{ height: "400px", width: "10px", background: "black", marginLeft: "120px" }} />
        <div style={{ height: "10px", width: "250px", background: "black" }} />


    </div>
}