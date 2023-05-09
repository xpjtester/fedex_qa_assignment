1. Installing and config Cypress and Mochawesome

2. write test cases with describe and IT block(detail in the code )

3. Running tests
   'ng e2e'

4. run test report 
   'npm run test:report'
  
5. report results: 

  Running:  spec.cy.ts                                                                      (1 of 1)
  Star Wars Search App
    √ searches for a valid character and displays their information
    √ searches for an invalid character and displays "Not found"
    √ searches for a valid planet and displays its information
    √ searches for an invalid planet and displays "Not found"
    √ clears previous search results when a new search is made
    √ returns multiple results when there are multiple matches
    √ can search for results by pressing enter on the search field


  7 passing (13s)

[mochawesome] Report JSON saved to C:\Users\zhouq\OneDrive\Documents\fedex_qa_assignment\reports\mochawesome\index.json


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        7                                                                                │
  │ Passing:      7                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     12 seconds                                                                       │
  │ Spec Ran:     spec.cy.ts                                                                       │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF
  -  Finished processing: 1 second

  -  Video output: C:\Users\zhouq\OneDrive\Documents\fedex_qa_assignment\cypress\videos\spec.cy.ts.mp4


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ √  spec.cy.ts                               00:12        7        7        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    √  All specs passed!                        00:12        7        7        -        -        -

The system cannot find the path specified.