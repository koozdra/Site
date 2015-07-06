
/*
Copyright (c) Dimitri Tishchenko

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var Fluent = (function () {
    
    var api = {};
    
    // add proproperty to objects "properties" property
    function addProperty(object, name) {
        object.prototype[name] = function (value) {
            this.properties = this.properties || {};
            if (arguments.length === 0) return this.properties[name];
            this.properties[name] = value; 
            return this;
        }
    }
    
    // add each property in the given array
    function addProperties(object, names){
        names.forEach(function(name){addProperty(object, name)})
    }
    
    // curry object on calls
    api.object = function (object){
        return {
            addProperty: function (name){
                addProperty(object, name);
                return this;
            },
            addProperties: function(names){
                addProperties(object, names)
                return this;
            }
        }
    };

    return api;
    
}());