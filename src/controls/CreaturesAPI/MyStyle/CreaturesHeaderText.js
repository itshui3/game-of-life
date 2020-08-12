import styled from 'styled-components'
// color each one differently
// make them jump up and have a bottom border on hover
// with a smooth bounce transition

const C = styled.span`
    &:hover {
        border-bottom: 5px solid;
        color: #1b262c;
        cursor: crosshair;
    }
`

const r = styled.span`
    &:hover {
        border-bottom: 5px solid;
        color: #6f4a8e;
        cursor: crosshair;
    }
`

const e = styled.span`
    &:hover {
        border-bottom: 5px solid;
        color: #f0f0f0;
        cursor: crosshair;
    }
`

const a = styled.span`
    &:hover {
        border-bottom: 5px solid;
        color: #ffc1f3;
        cursor: crosshair;
    }
`

const t = styled.span`
    &:hover {
        border-bottom: 5px solid;
        color: #f3c623;
        cursor: crosshair;
    }
`

const u = styled.span`
    &:hover {
        border-bottom: 5px solid;
        color: #32e0c4;
        cursor: crosshair;
    }
`

// r already exists, reuse

// e already exists, reuse

const F = styled.span`
    &:hover {
        border-bottom: 5px solid;
        color: #f35588;
        cursor: crosshair;
    }
`

// a already exists, reuse

const c = styled.span`
    &:hover {
        border-bottom: 5px solid;
        color: #dc2ade;
        cursor: crosshair;
    }
`

// t already exists, reuse

const o = styled.span`
    &:hover {
        border-bottom: 5px solid;
        color: #a3f7bf;
        cursor: crosshair;
    }
`

// r already exists, reuse

const y = styled.span`
    &:hover {
        border-bottom: 5px solid;
        color: #beebe9;
        cursor: crosshair;
    }
`

export {
    C,
    r,
    e,
    a,
    t,
    u,
// r
// e
    F,
// a
    c,
// t
    o,
// r
    y
}