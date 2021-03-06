/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('spectrum', 'v1explorer', () => {
        /** now we can use gapi.client.spectrum */

        run();
    });

    async function run() {
        /**
         * Requests information about the available spectrum for a device at a location. Requests from a fixed-mode device must include owner information so the
         * device can be registered with the database.
         */
        await gapi.client.paws.getSpectrum({
        });
        /** The Google Spectrum Database does not support batch requests, so this method always yields an UNIMPLEMENTED error. */
        await gapi.client.paws.getSpectrumBatch({
        });
        /** Initializes the connection between a white space device and the database. */
        await gapi.client.paws.init({
        });
        /**
         * Notifies the database that the device has selected certain frequency ranges for transmission. Only to be invoked when required by the regulator. The
         * Google Spectrum Database does not operate in domains that require notification, so this always yields an UNIMPLEMENTED error.
         */
        await gapi.client.paws.notifySpectrumUse({
        });
        /** The Google Spectrum Database implements registration in the getSpectrum method. As such this always returns an UNIMPLEMENTED error. */
        await gapi.client.paws.register({
        });
        /**
         * Validates a device for white space use in accordance with regulatory rules. The Google Spectrum Database does not support master/slave configurations,
         * so this always yields an UNIMPLEMENTED error.
         */
        await gapi.client.paws.verifyDevice({
        });
    }
});
