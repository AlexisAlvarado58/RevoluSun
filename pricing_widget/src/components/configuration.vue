<template>
    <div class="d-flex align-center flex-column">
        <v-card
        class="mt-5"
        width="900"
        elevation="10">
            <v-card-text>
                <v-row>
                    <v-col cols="3">
                    </v-col>
                    </v-row>
                <v-row class="pl-5 pb-5">
                    <v-col cols="12">
                        <v-row>
                            <v-col cols="6">
                                <h2 class="pb-5">System Output</h2>
                            </v-col>
                            <v-col cols="3">
                                <Pie
                        :chart-options="chartOptions"
                        :data="chartData"
                        :chart-id="chartId"
                        :dataset-id-key="datasetIdKey"
                        :plugins="plugins"
                        :css-classes="cssClasses"
                        :styles="styles"
                        :width="width"
                        :height="height"
                        />
                            </v-col>
                            <v-col cols="2">
                                <h2 class="pb-5">System Cost</h2>
                            </v-col>
                        </v-row>
                        <v-row>    
                            <v-col cols="6">
                                <v-row>
                                    PV Systems Totaling:  <h5 class="pl-2"> {{ pvSystem }} kW</h5> 
                                </v-row>
                            </v-col>
                            <v-col cols="6">
                                <v-row>
                                    Gross Installed Cost: <h5 class="pl-2"> $201,434.00</h5>
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="6">
                                <v-row>
                                    Est. Avg. Energy Per Day: <h5 class="pl-2"> {{ avgPerDay }} kW</h5>
                                </v-row>
                            </v-col>
                            <v-col cols="6">
                                <v-row>
                                    Federal Tax Credit: <h5 class="pl-2"> $60,430.20</h5>
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="6">
                                <v-row>
                                    Est. Avg. Energy Per Month: <h5 class="pl-2"> {{ avgPerMonth }}kW</h5>
                                </v-row>
                            </v-col>
                            <v-col cols="6">
                                <v-row>
                                    State Tax Credit: <h5 class="pl-2"> $0.00</h5>
                                </v-row>
                            </v-col>
                         </v-row>   
                            <v-row>
                                <v-col cols="6">
                                    <v-row>
                                        Est. Annual Energy Output: <h5 class="pl-2">{{ annualEnergy }} kW</h5>
                                    </v-row>
                                </v-col>
                                <v-col cols="6">
                                    <v-row>
                                        10Yr SMART Incentive: <h5 class="pl-2">$0.00</h5>
                                    </v-row>
                                </v-col>
                            </v-row>                            
                                <v-row>
                                    <v-col cols="6">
                                        <v-row>
                                            Est. Avg Old Bill: <h5 class="pl-2">{{ avgOldBill }}</h5>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="6">
                                        <v-row>
                                            Net Cost: <h5 class="pl-2">$141,003.80</h5>
                                        </v-row>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    Est. Avg New Bill: <h5 class="pl-2">{{ avgNewBill }}</h5>
                                </v-row>
                                <v-row>
                                    Est. Savings First Year: <h5 class="pl-2">{{ savingFirst }}</h5>
                                </v-row>
                                <v-row>
                                    Est. Monthly SMART Amt: <h5 class="pl-2">{{ monthlySmart }}</h5>
                                </v-row>
                        </v-col>
                </v-row>
            </v-card-text>
        </v-card>
        <v-card
        class="mt-5"
        width="900"
        elevation="10">
            <v-card-title>System Configuration</v-card-title>
            <v-card-text>
                <v-col cols="12">
                    <v-row>
                        <v-col cols="4">
                            <v-row>
                                <v-select
                                label="Module Type"
                                outlined
                                dense
                                :items="Modules"
                                item-text="text"
                                item-value="value"
                                ></v-select>
                            </v-row>
                            <v-row class="pb-5">
                                Modules  <h4 class="pl-2">{{ noModules }}</h4>
                            </v-row>
                            <v-row>
                                <v-select
                                outlined
                                dense
                                label="Monitoring"
                                ></v-select>
                            </v-row>
                            <v-row>
                                <v-select
                                outlined
                                dense
                                label="Racking"
                                :items="rackingItems"
                                v-model="rackingSelected"
                                ></v-select>
                            </v-row>
                            <v-row class="pl-10 ">
                                <v-checkbox
                                    dense
                                    label="Use Latest Pricing"
                                    v-model="latestPricing"
                                ></v-checkbox>
                                <v-checkbox
                                    dense
                                    label="Solar Optimizer"
                                    v-model="solarOptimizer"
                                ></v-checkbox>
                                <v-checkbox
                                    dense
                                    label="Existing System add-on"
                                    v-model="existingSystem"
                                ></v-checkbox>
                                <v-checkbox
                                    dense
                                    label="Show prior equipment options"
                                    v-model="priorEquipment"
                                ></v-checkbox>
                                <v-checkbox
                                    dense
                                    label="State Tax Credit N/A"
                                    v-model="stateTax"
                                ></v-checkbox>
                            </v-row>
                        </v-col>
                        <v-col class="pl-10" cols="5"> 
                            <v-row>
                                <v-select
                                label="Inverter Type"
                                :items="inverterItems"
                                dense
                                outlined
                                ></v-select>
                            </v-row>
                            <v-row>
                                <v-text-field
                                label="Inverters"
                                dense
                                outlined
                                type="number"
                                v-model="noInverters"
                                ></v-text-field>

                                <v-checkbox
                                dense
                                label="Override"
                                v-model="override"
                                ></v-checkbox>

                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>        
            </v-card-text>
        </v-card>
        <v-card
        class="mt-5"
        width="900"
        elevation="10">
            <!-- <v-card-title>Roof 1 - South</v-card-title> -->
            <v-card-text>
                <v-col cols="12">
                    <v-row>
                        <v-col cols="6">
                            <h2 class="pb-5">Roof 1 - South</h2>
                        </v-col>
                        <v-col cols="6">
                            <h2 class="pb-5">Roof 2 - East</h2>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="2">
                            <v-text-field
                            dense
                            outlined
                            label="Number of Modules"
                            v-model="modulesNumber"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-slider
                                color="orange"
                                v-model="modulesNumber"
                                :min="0"
                                :max="50"
                                :step="1"
                                thumb-label="always"
                            ></v-slider>
                        </v-col>
                        <v-col cols="2">
                            <v-text-field
                            dense
                            outlined
                            label="Number of Modules"
                            v-model="modulesNumber2"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-slider
                                color="orange"
                                v-model="modulesNumber2"
                                :min="0"
                                :max="50"
                                :step="1"
                                thumb-label="always"
                            ></v-slider>
                        </v-col>
                    </v-row>
                </v-col>
            </v-card-text>
        </v-card>
        <v-card
        class="mt-5"
        width="900"
        elevation="10">
            <v-card-title>Financial</v-card-title>
            <v-card-text>
                <v-col cols="12">
                    <v-row>
                        <v-col  cols="6">
                            <v-select
                            label="Payment Method"
                            outlined
                            dense
                            :items="paymentItems"
                            item-text="text"
                            item-value="value"
                            ></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <v-row>
                                <v-col cols="3">
                                    <v-text-field 
                                    outlined 
                                    dense
                                    type="number"
                                    label="Misc. Expenses"
                                    v-model="miscExpenses"
                                    ></v-text-field>
                                </v-col>
                                <v-col class="ml-10" cols="1">
                                    <v-checkbox
                                    v-model="dealerDiscount"
                                    ></v-checkbox>
                                </v-col>
                                <v-col v-if="dealerDiscount" cols="2">
                                    <v-text-field 
                                    outlined 
                                    dense
                                    type="number"
                                    label="Dealer Discount"
                                    v-model="NoDiscount"
                                    ></v-text-field>
                                </v-col>
                                <v-col  v-if="dealerDiscount" cols="4">
                                    <v-select
                                    outlined
                                    dense
                                    label="Type"
                                    :items="typeDiscount"
                                    item-text="text"
                                    item-value="value"
                                    ></v-select>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>
            </v-card-text>
        </v-card>
        <v-card
        class="mt-5"
        width="900"
        elevation="10">
            <!-- <v-card-title>Financial</v-card-title> -->
            <v-card-text>
                <v-col cols="12">
                    <v-row>
                        <h2>Area Fee</h2>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-text-field 
                            outlined 
                            dense
                            label="Non-Treasure Valley Base Area Fee"
                            type="number"
                            v-model="nonTreasureAreaFee"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field 
                            outlined 
                            dense
                            label="Non-Treasure Valley Area-Fee - Add Days"
                            type="number"
                            v-model="nonTreasureAddDays"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-text-field 
                            outlined 
                            dense
                            label="DBS PV Only Fee"
                            type="number"
                            v-model="dbsPVOnlyFee"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <h2>Permitting</h2>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-text-field 
                            outlined 
                            dense
                            label="DBS PV + Battery Fee"
                            type="number"
                            v-model="dbsPvBatteryFee"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field 
                            outlined 
                            dense
                            label="DBS Battery Only Fee"
                            type="number"
                            v-model="dbsBatteryOnly"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-text-field
                             outlined 
                             dense
                            label="DBS Off-Grid Fee"
                            type="number"
                            v-model="dbsOff"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <h2>SPAN</h2>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-text-field 
                            outlined 
                            dense 
                            label="SPAN in New Construction"
                            type="number"
                            v-model="spaninNew"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field 
                            outlined 
                            dense
                            label="SPAN w/ PV System"
                            type="number"
                            v-model="spanWithPv"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-text-field 
                            outlined 
                            dense
                            label="SPAN without PV"
                            type="number"
                            v-model="spanWithoutPv"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <h2>SPLIT AC</h2>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-text-field 
                            outlined 
                            dense
                            label="Mini-Split AC"
                            type="number"
                            v-model="miniSplit"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <h2>Tesla</h2>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-text-field 
                            outlined 
                            dense
                            label="Gateway"
                            type="number"
                            v-model="gateway"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field 
                            outlined 
                            dense
                            label="Tesla Stacking Kit"
                            type="number"
                            v-model="stackingKit"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-text-field 
                            outlined 
                            dense
                            label="58 Tesla Solar Roof - Non-PV Material"
                            type="number"
                            v-model="teslaNonPvMaterial"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field 
                            outlined 
                            dense
                            label="Tesla Solar Roof - Install Labor"
                            type="number"
                            v-model="teslaInstallLabor"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-text-field 
                            outlined 
                            dense
                            label="Tesla Solar Roof - Remove Existing Roof"
                            type="number"
                            v-model="teslaRemoveExisting"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field 
                            outlined 
                            dense
                            label="Tesla Powerpack 2.5"
                            type="number"
                            v-model="teslaPower"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-text-field 
                            outlined 
                            dense
                            label="Tesla Megapack"
                            type="number"
                            v-model="teslaMegapack"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field
                            outlined
                            dense
                            label="72 W Tesla Solar Roof Non-PV Material"
                            type="number"
                            v-model="tesla72Solar"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-text-field 
                            outlined 
                            dense
                            label="Linear Feet of Snow Rails Intalled"
                            type="number"
                            v-model="linearFeet"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-col>
            </v-card-text>
        </v-card>
        <v-card
        class="mt-5 mb-10"
        width="900"
        elevation="10">
            <v-card-title>Notes</v-card-title>
            <v-card-text>
                <v-col cols="12">
                    <v-textarea
                    outlined
                    dense
                    label="Notes: "
                    v-model="Notes"
                    ></v-textarea>
                </v-col>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text >Save As</v-btn>
                <v-btn text class="pl-5">Create Proposal</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
import { Pie } from 'vue-chartjs'
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale
  } from 'chart.js'
 ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)
  
export default {
    components:{
        Pie
    },
    data(){
        return{
            systemCost: false,
            pvSystem : 5.81,
            avgPerDay: 19.84,
            avgPerMonth: 592.64,
            annualEnergy: 7111.71,
            avgOldBill: "$43.63",
            avgNewBill: "%5.00",
            savingFirst: "$463.58",
            monthlySmart: "$0.00",
            Modules: [
                { "text": "ID01: Tesla Solar Roof - 72 W Mods", "value":"teslaR72"},
                { "text": "ID01: (Commercial) Jinko 410", "value":"jinko410"},
                { "text": "ID01: (Commercial) Jinko 410 - Eagle", "value":"jinkoEagle"},
                { "text": "ID01: Jinko 390 - Standard Efficiency", "value":"jinkoStandard"},
                { "text": "ID01: NO PV", "value":"nopv"},
                { "text": "ID01: REC 405W - High Efficiency", "value":"rec405"},
                { "text": "ID01: REC 420W - Commercial", "value":"rec420"},
                { "text": "ID01: Tesla Solar Roof - 58 W", "value":"teslaSolar58"},
                { "text": "ID01: URE 400 - Standard Efficiency", "value":"ure400"},
            ],
            noModules: 81,
            rackingSelected: "",
            rackingItems: [
                " ",    
                "SunPower - Invisimount",
            ],
            rackingSelected: "",
            latestPricing: "",
            solarOptimizer: "",
            existingSystem: "",
            priorEquipment: "",
            stateTax: "",
            inverterItems: [],
            noInverters: 0,
            override: false,
            modulesNumber: 50,
            modulesNumber2: 31,
            paymentItems: [
                {"text": "PSCCU - 15 Yr" , "value":"psccu"},
                {"text": "Mosaic - 25 YR - 3.99%" , "value":"mosaic"},
                {"text": "Sunlight -  25 Year - 4.49%" , "value":"sunlight"},
                {"text": "Sungage - 25 - 5.99%" , "value":"sungage"},
                {"text": "Mosaic - SAC - 25 Yr - 10.99%" , "value":"mosaicSAC"},
                {"text": "PSCCU Battery Only" , "value":"psccuBattery"},
                {"text": "Mosaic -  Battery - 10.99%" , "value":"mosaicBattery"},
                {"text": "Sunlight - Battery Only -2.99%" , "value":"sunlightBattery"},
                {"text": "Sungage - Battery - 4.99%" , "value":"sungageBattery"},
                {"text": "Cash" , "value":"Cash"},
                {"text": "Credit Card" , "value":"creditCard"},
                {"text": "Sunstone 5.99%" , "value":"sunstone"},
            ],
            miscExpenses: 0,
            dealerDiscount: false,
            NoDiscount: 0,
            typeDiscount: [
                {"text": "","value":""},
                {"text": "Approval -Rachael","value":"aproveRachael"},
                {"text": "Approval- Dylan","value":"aproveDylan"},
                {"text": "PD/Revolusun Split (50/50)","value":"pdRevolusun"},
                {"text": "12 month Electric Bill payments","value":"monthElectric"},
                {"text": "Military & First Responder","value":"Military"},
                {"text": "Change Order Price Supv","value":"changeOrder"}
            ],
            nonTreasureAreaFee: 0,
            nonTreasureAddDays: 0,
            dbsPVOnlyFee: 0,
            dbsPvBatteryFee: 0,
            dbsBatteryOnly: 0,
            dbsOff: 0,
            spaninNew:0,
            spanWithPv: 0,
            spanWithoutPv:0,
            miniSplit:0,
            gateway:0,
            stackingKit:0,
            teslaNonPvMaterial:0,
            teslaInstallLabor:0,
            teslaRemoveExisting:0,
            teslaPower:0,
            teslaMegapack:0,
            tesla72Solar:0,
            linearFeet:0,
            Notes: "",
            chartData: {
                labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
                datasets: [
                  {
                    backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                    data: [40, 20, 80, 10]
                  }
                ]
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    props: {
      chartId: {
        type: String,
        default: 'pie-chart'
      },
      datasetIdKey: {
        type: String,
        default: 'label'
      },
      width: {
        type: Number,
        default: 100
      },
      height: {
        type: Number,
        default: 100
      },
      cssClasses: {
        default: '',
        type: String
      },
      styles: {
        type: Object,
        default: () => {}
      },
      plugins: {
        type: Array,
        default: () => []
      }
    },

}
</script>
<style>
 
</style>