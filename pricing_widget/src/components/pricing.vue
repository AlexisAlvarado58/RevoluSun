<template>
    <div class="d-flex align-center flex-column">
        <v-card
        class="mt-10"
        width="700"
        elevation="10">
            <v-card-text>
                Roof Access:  {{ total }} $
                <v-select
                :items="RoofItems"
                v-model="roofSelected"
                label="Roof Access"
                >
                </v-select>
                <v-select
                :items="[1,2,3,4,5,6,7,8,9,10]"
                label="Number of Roof Azimuths"
                v-model="azimuthsSelected"
                ></v-select>
                <v-checkbox
                label="Re-Roofing: Is the customer re-roofing?"
                ></v-checkbox>


            </v-card-text>
        </v-card>
        <v-spacer class="mt-10"></v-spacer>
            <v-row  class="" v-for="(item,i) in azimuthsSelected" :key="i">
                <v-card
                class="mt-5"
                width="700"
                elevation="10">
                <v-card-title>
                 Roof Number {{ item }}
                </v-card-title>
                <v-card-text>
                    <v-col cols="12">
                        <v-row>
                            <v-col cols="6">
                                <v-select
                                :items="typeItems"
                                v-model="arrayRoofs[i].typeSelected"
                                label="Roof Type"
                                >
                                </v-select>
                            </v-col>
                            <v-col cols="6">

                                <v-select
                                v-model="arrayRoofs[i].roofCon"
                                :items="conditionItems"
                                label="Roof Condition">    
                            </v-select>
                        </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="6">
                                <v-text-field  v-model="arrayRoofs[i].orientation" type="number" label="Orientation" hint="(deg. 0-359)"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field type="number" v-model="arrayRoofs[i].roofTilt" label="Roof Tilt" hint="(deg. 0-60)"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-col cols="12">
                            Solar Access % : 
                        <v-row>
                            <v-col cols="1">
                                <v-text-field
                                label="Jan"
                                v-model="arrayRoofs[i].jan"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="1">
                                <v-text-field
                                label="Feb"
                                v-model="arrayRoofs[i].feb"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="1">
                                <v-text-field
                                label="Mar"
                                v-model="arrayRoofs[i].mar"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="1">
                                <v-text-field
                                label="Apr"
                                v-model="arrayRoofs[i].apr"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="1">
                                <v-text-field
                                label="May"
                                v-model="arrayRoofs[i].may"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="1">
                                <v-text-field
                                label="Jun"
                                v-model="arrayRoofs[i].jun"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="1">
                                <v-text-field
                                label="Jul"
                                v-model="arrayRoofs[i].jul"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="1">
                                <v-text-field
                                label="Aug"
                                v-model="arrayRoofs[i].aug"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="1">
                                <v-text-field
                                label="Sep"
                                v-model="arrayRoofs[i].sep"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="1">
                                <v-text-field
                                label="Oct"
                                v-model="arrayRoofs[i].oct"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="1">
                                <v-text-field
                                label="Nov"
                                v-model="arrayRoofs[i].nov"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="1">
                                <v-text-field
                                label="Dec"
                                v-model="arrayRoofs[i].dec"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-col>
                    </v-col>
              </v-card-text>
        </v-card>
    </v-row>
    <v-row class="pt-10">
        <v-card>
            <v-card-actions>
                <v-btn
                @click="saveArray()"
                large
                >Save</v-btn>
            </v-card-actions>
        </v-card> 
    </v-row>
    
    </div>
</template>
<script>
export default {
    data(){
        return{
            RoofItems: ["Second Story Access","Single Story Easy Access","Third Story Access Only"],
            // roofSelected: 0,
            // azimuthsSelected: 2,
            typeItems: [
            " ",
            "Ground Mount",
            "J-Rib Metal or Corrugated",
            "Pole Mount",
            "Standing Seam",
            "TPO/PVC (FLAT)",
            "Wood Shake or Shingle",
            "Asphalt Shingles",
            "Cement Tile",
            "Composite Shingles",
            "Spanish Style"
            ],
            typeSelected:[],
            conditionItems: ["Poor","Good","Excellent","Other (See Notes)"],
            // arrayRoofs: [
            // { "roofCon": "" , "roofType": "","orientation": "","roofTilt":"","jan":0,"feb":0,"mar":0,"apr":0,"may":0,"jun":0,"jul":0,"aug":0,"sep":0,"oct":0,"nov":0,"dec":0},
            // { "roofCon": "" , "roofType": "","orientation": "","roofTilt":"","jan":0,"feb":0,"mar":0,"apr":0,"may":0,"jun":0,"jul":0,"aug":0,"sep":0,"oct":0,"nov":0,"dec":0},
            // { "roofCon": "" , "roofType": "","orientation": "","roofTilt":"","jan":0,"feb":0,"mar":0,"apr":0,"may":0,"jun":0,"jul":0,"aug":0,"sep":0,"oct":0,"nov":0,"dec":0},
            // { "roofCon": "" , "roofType": "","orientation": "","roofTilt":"","jan":0,"feb":0,"mar":0,"apr":0,"may":0,"jun":0,"jul":0,"aug":0,"sep":0,"oct":0,"nov":0,"dec":0},
            // { "roofCon": "" , "roofType": "","orientation": "","roofTilt":"","jan":0,"feb":0,"mar":0,"apr":0,"may":0,"jun":0,"jul":0,"aug":0,"sep":0,"oct":0,"nov":0,"dec":0},
            // { "roofCon": "" , "roofType": "","orientation": "","roofTilt":"","jan":0,"feb":0,"mar":0,"apr":0,"may":0,"jun":0,"jul":0,"aug":0,"sep":0,"oct":0,"nov":0,"dec":0},
            // { "roofCon": "" , "roofType": "","orientation": "","roofTilt":"","jan":0,"feb":0,"mar":0,"apr":0,"may":0,"jun":0,"jul":0,"aug":0,"sep":0,"oct":0,"nov":0,"dec":0},
            // { "roofCon": "" , "roofType": "","orientation": "","roofTilt":"","jan":0,"feb":0,"mar":0,"apr":0,"may":0,"jun":0,"jul":0,"aug":0,"sep":0,"oct":0,"nov":0,"dec":0}
            // ],
            conditionSelected2:[],
            // total: 0.00,
            // auxtotal:0.0,
            // auxazimuth: 0.0,   
        }
    },
    watch:{
        // roofSelected(value){
        //     this.total = this.total - this.auxtotal;
        //     if(value == "Single Story Easy Access"){
        //         this.total = this.total + .10;
        //         this.auxtotal = .10;
        //     }else if(value == "Second Story Access"){
        //         this.total = this.total + .20;
        //         this.auxtotal = .20;
        //     }else if (value == "Third Story Access Only"){
        //        this.total= this.total + .30;
        //        this.auxtotal = .30;
        //     }
        // },
        // azimuthsSelected(value){
        //     console.log(value);
        //      this.total = this.total - this.auxazimuth;
        //      console.log(this.total);
        //   switch(value){
        //     case 1:
        //         this.total = this.total  -.15;
        //         this.auxazimuth = -.15;
        //         break;
        //     case 2:
        //         this.total = this.total + -.10;
        //         this.auxazimuth = -.10;
        //         break;
        //     case 3:
        //          // + 0
        //     break;
        //     case 4:
        //         this.total = this.total + .10;
        //         this.auxazimuth = .10;
        //         break;
        //     case 5:
        //         this.total = this.total + .20;
        //         this.auxazimuth = .20;
        //     break;
        //     case 6:
        //         this.total = this.total + .30;
        //         this.auxazimuth = .30;
        //     break;        
        //     case 7:
        //         this.total = this.total + .40;
        //         this.auxazimuth = .40;
        //     break;
        //     case 8:
        //         this.total = this.total + .50;
        //         this.auxazimuth = .50;
        //     break;
        //     default:
        // }
        // },
    

    },
    computed:{
        roofSelected: {
            get() {
                return this.$store.state.roofs.roofSelected;
            },
            set(value) {
                this.$store.state.roofs.roofSelected = value;
            },
        },
        total: {
            get() {
                return this.$store.state.roofs.total;
            },
            set(value) {
                this.$store.state.roofs.total = value;
            },
        },
        auxtotal: {
            get() {
                return this.$store.state.roofs.auxtotal;
            },
            set(value) {
                this.$store.state.roofs.auxtotal = value;
            },
        },
        auxazimuth: {
            get() {
                return this.$store.state.roofs.auxazimuth;
            },
            set(value) {
                this.$store.state.roofs.auxazimuth = value;
            },
        },
        azimuthsSelected: {
            get() {
                return this.$store.state.roofs.azimuthsSelected;
            },
            set(value) {
                this.$store.state.roofs.azimuthsSelected = value;
            },
        },
        arrayRoofs: {
            get() {
                return this.$store.state.roofs.arrayRoofs;
            },
            set(value) {
                this.$store.state.roofs.arrayRoofs = value;
            },
        },
        roofSelected: {
            get() {
                return this.$store.state.roofs.roofSelected;
            },
            set(value) {
                this.$store.state.roofs.roofSelected = value;
            },
        }
    },
    methods:{
       async saveArray(){
            this.total= 0.00;
            this.arrayRoofs2 = [];
            for (let i = 0; i < this.azimuthsSelected; i++) {
              await  this.arrayRoofs2.push(
                    {
                     "roofCon": this.arrayRoofs[i].roofCon , 
                    "roofType": this.arrayRoofs[i].roofType,
                    "orientation": this.arrayRoofs[i].orientation,
                    "roofTilt": this.arrayRoofs[i].roofTilt,
                    "jan": this.arrayRoofs[i].jan,
                    "feb": this.arrayRoofs[i].feb,
                    "mar": this.arrayRoofs[i].mar,
                    "apr": this.arrayRoofs[i].apr,
                    "may": this.arrayRoofs[i].may,
                    "jun": this.arrayRoofs[i].jun,
                    "jul": this.arrayRoofs[i].jul,
                    "aug": this.arrayRoofs[i].aug,
                    "sep": this.arrayRoofs[i].sep,
                    "oct": this.arrayRoofs[i].oct,
                    "nov": this.arrayRoofs[i].nov,
                    "dec": this.arrayRoofs[i].dec,
                    }
                )
                
            }
            if(this.roofSelected == "Single Story Easy Access"){
                this.total = this.total + parseFloat(0.10);
            
            }else if(this.roofSelected == "Second Story Access"){
                this.total = this.total + 0.20;
                
            }else if (this.roofSelected == "Third Story Access Only"){
               this.total= this.total + 0.30;
            
            }
            
         await   this.arrayRoofs2.forEach(element => {
                
                if(element.roofType == "TPO/PVC (FLAT)"){
                    console.log("hello");
                    this.total = this.total + 0.20;
                }else if(element.roofType == "Cement Tile"||element.roofType == "Spanish Style" ){
                    this.total = this.total + 0.40;
                }else if(element.roofType == "Pole Mount" || element.roofType == "Ground Mount"){
                    this.total = this.total + 1.00;
                }
                
            });
            
            
            this.azimuthsAdding(this.azimuthsSelected);            
            this.total = parseFloat(this.total).toFixed(2);



        },
        azimuthsAdding(value){
            console.log("si");
            switch(value){
                case 1:
                    this.total = this.total  -.15;
                    break;
                case 2:
                    this.total = this.total + -.10;
                    break;
                case 3:
                    // + 0
                break;
                case 4:
                    this.total = this.total + .10;
                    break;
                case 5:
                    this.total = this.total + .20;  
                break;
                case 6:
                    this.total = this.total + .30;
                break;        
                case 7:
                    this.total = this.total + .40; 
                break;
                case 8:
                    this.total = this.total + .50;
                break;
                default:
                    break;
            }
        }
    }
    
}
</script>