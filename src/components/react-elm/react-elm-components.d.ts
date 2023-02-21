declare module 'react-elm-components' {
  import React from 'react'
  
  export interface ElmMain<F,P> {
    init(options: { node?: Node | undefined; flags?: F | undefined }): ElmApp<P>;
  }
  
  export type Ports<T extends ElmMain<any,any>> = T extends ElmMain<any, infer P> ? P : never 
  export type Flag<T extends ElmMain<any, any>> = T extends ElmMain<infer F, any> ? F : never
  
  export interface Props<F,P> {
    src: ElmMain<F,P>
    flags?: F
    ports?: (ports: Ports) => void
  }
  
  export default class Elm<F,P> extends React.Component<Props<F,P>> {}
}