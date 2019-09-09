# sdk-boilerplate
Generate an SDK for artifactory (or whatever other repo used for sharing). This project uses CommonJS. 

# Just notes I am learning about SDKs from code reviews and such

1. Should be versioned (semvr)
2. should be a "block box" for they consumer... the pass some stuff in and get some stuff back... nothing more to see here folks. 
3. always use comments/annotations
4. include definition files (typescripting)
5. language dependent so you have to have 1 for each language you are supporting
6. copy tests from SDK into the projects that the SDK is built for so you make sure you do not break any contracts when editing the original project. The SDK woul dbe installed as a dev dependency.
7. handling the upload of the SDK to a shareable repo is usually handled in the Jenkins file 
8. look into PACT for writing tests against SDKs