<template>
    <div class="d-flex align-center flex-column">
        <v-card
        class="mt-10 mb-5"
        width="700"
        elevation="10"
        >
            <v-card-title>Physical Details</v-card-title>
            <v-card-text>
                <v-col cols="12">
                    <v-row>
                        <v-col cols="6">
                            <v-text-field
                            outlined
                            dense
                            v-model="parcelID"
                            label="Parcel ID"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-select
                            :items="['Yes','No']"
                            outlined
                            dense
                            v-model="newConstruction"
                            label="New Construction"
                            ></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <v-select
                            outlined
                            dense
                            label="Home Owners Association"
                            :items="['Yes','No']"
                            ></v-select>
                        </v-col>
                        <v-col>
                            <v-checkbox dense label="Moderate Home" v-model="mHome"></v-checkbox>
                            <v-checkbox  dense label="Moderate Income" v-model="mIncome"></v-checkbox>
                            <v-checkbox  dense label="Townhouse" v-model="townHouse"></v-checkbox>
                        </v-col>
                    </v-row>
                </v-col>
            </v-card-text>
        </v-card>
        <v-card
        class="mb-5"
        width="700"
        elevation="10"
        >
            <v-card-title>
                Connectivity
            </v-card-title>    
            <v-card-text>
                <v-col cols="12">
                    <v-row>
                        <v-col cols="6">
                            <v-select
                            label="Internet Connection"
                            outlined
                            dense
                            :items="ArrayInternet"
                            v-model="internetSelected"
                            ></v-select>
                        </v-col>
                        <v-col cols="6">
                            <v-checkbox
                            dense
                            outlined
                            label="Has a Switch or Router"
                            v-model="switchBoolen"
                            ></v-checkbox>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="7">
                           <v-text-field
                           type="number"
                           label="Distance from inverters to modem(ft)"
                           dense
                           outlined
                           v-model="distance"
                           ></v-text-field> 
                        </v-col>
                    </v-row>
                </v-col>

            </v-card-text>
        </v-card>
        <v-card
        class="mb-5"
        width="700"
        elevation="10"
        >
            <v-card-title>Electrical</v-card-title>
            <v-card-text>
                <v-col cols="12">
                    <v-row>
                        <v-col cols="6">
                            <v-select
                            outlined
                            dense
                            label="Has a Grounding Rod?"
                            :items="['Yes','No']"
                            v-model="hasGrounding"
                            ></v-select>
                        </v-col>
                        <v-col cols="6">
                            <v-select
                            outlined
                            dense
                            label="Has additional electric panels?"
                            :items="['Yes','No']"
                            v-model="additionalElectric"
                            ></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <v-text-field
                            type="number"
                            outlined
                            dense
                            label="Total Conduit Run Length (ft)"
                            v-model="totalConduit"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                            type="number"
                            outlined
                            dense
                            label="Electrical Service Size (Amps)"
                            v-model="electricalService"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <v-text-field
                            type="number"
                            outlined
                            dense
                            label="Painted Conduit Run Length (ft)"
                            v-model="paintedConduit"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                            type="number"
                            outlined
                            dense
                            label="Maximum Amp Load (Amps)"
                            v-model="maxAmp"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <v-text-field
                            type="number"
                            outlined
                            dense
                            label="Total Slim Duct Run Length (ft)"
                            v-model="totalSlim"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-select
                            outlined
                            dense
                            label="Has a Flush Mounted Meter?"
                            :items="['Yes','No']"
                            v-model="hasFlush"
                            ></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <v-text-field
                            type="number"
                            outlined
                            dense
                            label="Grounding Run Length (ft)"
                            v-model="groundingRun"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-col>
            </v-card-text>
        </v-card>
        <v-card
        class="mb-10"
        width="700"
        elevation="10"
        >
            <v-card-title>Site Notes</v-card-title>
            <v-card-text>
                <v-textarea
                outlined
                dense
                v-model="siteNotes"
                ></v-textarea>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
export default {
    data(){
        return{
            parcelID: '',
            newConstruction: '',
            mHome:'',
            mIncome:'',
            townHouse:'',
            ArrayInternet:[
                "Cable Broadband",
                "DSL/ADSL/VDSL",
                "Dialup (Analog)",
                "ISDN Broadband",
                "Satellite Broadband",
                "T1/T3 Line",
                "Wireless Broadband"
            ],
            internetSelected:'',
            switchBoolen:'',
            distance:'',
            hasGrounding:'',
            additionalElectric:'',
            totalConduit:0,
            electricalService:0,
            paintedConduit:0,
            maxAmp:0,
            totalSlim:0,
            hasFlush: '',
            groundingRun:0,
            siteNotes: ''
        }
    }
    
}
</script>