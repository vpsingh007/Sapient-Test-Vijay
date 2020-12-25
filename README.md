
## PROPERTY USED IN STATE
    1.  For base url and change url
    2.  For API data 
    3.  Boolean state for launching and landing 

## CONTEXT API
    contextAPI used to provide the data on root level so nested component can consume easily.

## REACT HOOKS USED
    1.  useEffect : used for API to fetching DATA
    2.  useContext: used to consume the context on nested level
    3.  useReducer: used to manage the state, based on Action Type
    #   React.memo() used on nested level component so re-rendering can be prevent if no change in props

## PRODUCTION BUILD PROCESS
    1.  WEBPACK 5 is used for production build 
    2.  DevServer is also running with webpack settings.
## STYLING 
    1.  Responsive code is written in Grid.css for different resolution with @media queries and targeted required resolution with max width of 1400px
    2.  Normal component CSS is written in App.css