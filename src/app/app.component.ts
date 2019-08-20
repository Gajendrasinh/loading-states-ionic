import { Component, OnDestroy, ChangeDetectorRef , OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as Colors from '@pxblue/colors';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

  Colors: Object = Colors;

  title = 'Loading Example';
  cols: number = 4;
  breakpointSubscription: any;
  deviceList = [{
      name : "placeholder1",
      data : {}
    },
    {
      name : "placeholder2",
      data : {}
    },
    {
      name : "placeholder3",
      data : {}
    },{
      name : "placeholder4",
      data : {}
    }
  ];


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private breakpointObserver: BreakpointObserver,
    changeDetectorRef: ChangeDetectorRef,
  ) {
    this.initializeApp();

    this.breakpointSubscription = this.breakpointObserver.observe([ '(max-width: 599.99px)', '(max-width: 959.99px)']).subscribe(result => {
      const small = Object.keys(result.breakpoints)[0];
      const medium = Object.keys(result.breakpoints)[1];

      if (result.breakpoints[small]) { this.cols = 1 }
      else if (result.breakpoints[medium]) { this.cols = 2 }
      else { this.cols = 4 }
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {   
    this.refreshData();
  }

  interpretIcon(value) {
    if (value < 80) {
      return  "A"
    };
    if (value < 90) {
      return "B"
    };
    return "C"
  }
   interpretColor(value) {
    if (value < 25) {
      return Colors.red[500]
    }
    if (value < 70) {
      return Colors.yellow[500]
    };
    return  Colors.green[500]
  }

     gradeInterpretColor(value) {
    if (value < 80) {
      return Colors.red[500]
    }
    if (value < 90) {
      return Colors.yellow[500]
    };
    return  Colors.green[500]
  }

  refreshData(){
    this.deviceList = [{
        name : "placeholder1",
        data : {}
      },
      {
        name : "placeholder2",
        data : {}
      },
      {
        name : "placeholder3",
        data : {}
      },{
        name : "placeholder4",
        data : {}
      }
    ];
    setTimeout(() => {

     this.deviceList =   [{
        name: "placeholder1",
        data: {
          heroValue: 0,
          loadValue: 20,
          battery: 12,
          channels: [{
              icon: "wb_sunny",
              label: "Temperature",
              value: 68,
              unit: "°F"
            },
            {
              icon: "brightness_high",
              label: "Output Voltage",
              value: 480,
              unit: "V"
            },
            {
              icon: "wb_incandescent",
              label: "Output Current",
              value: 15,
              unit: "A"
            }
          ]
        }
      },
      {
        name: "placeholder2",
        data: {
          heroValue: 100,
          loadValue: 33,
          battery: 52,
          channels: [{
              icon: "wb_sunny",
              label: "Temperature",
              value: 68,
              unit: "°F"
            },
            {
              icon: "brightness_high",
              label: "Output Voltage",
              value: 480,
              unit: "V"
            },
            {
              icon: "wb_incandescent",
              label: "Output Current",
              value: 15,
              unit: "A"
            }
          ]
        }
      },
      {
        name: "placeholder3",
        data: {
          heroValue: 72,
          loadValue: 98,
          battery: 98,
          channels: [{
              icon: "wb_sunny",
              label: "Temperature",
              value: 50,
              unit: "°F"
            },
            {
              icon: "brightness_high",
              label: "Output Voltage",
              value: 680,
              unit: "V"
            },
            {
              icon: "wb_incandescent",
              label: "Output Current",
              value: 13,
              unit: "A"
            }
          ]
        },
      }, {
        name: "placeholder4",
        data: {
          heroValue: 54,
          loadValue: 73,
          battery: 22,
          channels: [{
              icon: "wb_sunny",
              label: "Temperature",
              value: 78,
              unit: "°F"
            },
            {
              icon: "brightness_high",
              label: "Output Voltage",
              value: 250,
              unit: "V"
            },
            {
              icon: "wb_incandescent",
              label: "Output Current",
              value: 20,
              unit: "A"
            }
          ]
        },
      }
    ]

    },123000)
  }
}
