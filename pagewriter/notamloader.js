var handlebars = require('handlebars')
var fs = require('fs');
var path = require('path');

var data = {
   "firs":[
      {
         "id":0,
         "firCode":"LRBB",
         "firName":"Bucharest",
         "sfUpdated":"2017 09 20",
         "sfAirac":"1611",
         "sfLastPos":"LRBB_L_CTR",
         "notamAirports":[
            {
               ntCode:'LROP',
               ntName:"Otopeni",
               ntNotams:'',

            },
            {
               ntCode:'LRCL',
               ntName:"Cluj",
               ntNotams:'',

            },
            {
               ntCode:'LRTR',
               ntName:"Timisoara",
               ntNotams:'',

            }
         ]
      },
      {
         "id":1,
         "firCode":"LBSR",
         "firName":"Sofia",
         "sfUpdated":"2017 09 10",
         "sfAirac":"1612",
         "sfLastPos":"LBSR_CTR",
         "notamAirports":[
            {
               "ntCode":'LROP',
               "ntName":"Otopeni",
               "ntNotams":'',

            },
            {
               "ntCode":'LRCL',
               "ntName":"Cluj",
               "ntNotams":'',

            },
            {
               "ntCode":'LRTR',
               "ntName":"Timisoara",
               "ntNotams":''

            }
         ]
      }
   ],

} ;