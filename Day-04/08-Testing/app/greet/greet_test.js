describe("greet module", function(){
    beforeEach(module("myApp.greet"));
    
    describe("greetController", function(){
        it("Should initialize name as empty string", inject(function($controller){
            var dummyScope = {};
            
            $controller('greetController', {$scope : dummyScope});
            
            expect(dummyScope.name).toBe('');
        }));
    });
    
    describe("greetController", function(){
        it("Should initialize message as empty string", inject(function($controller){
            var dummyScope = {};
            
            $controller('greetController', {$scope : dummyScope});
            
            expect(dummyScope.message).toBe('');
        }));
    });
    
    describe("greetController", function(){
        it("Should populate the message when greeted", inject(function($controller){
            var dummyScope = {};
            var expectedMessage = 'Hi Magesh, Have a nice day!';
            
            $controller('greetController', {$scope : dummyScope});
            
            dummyScope.name = 'Magesh';
            dummyScope.greet();
            
            expect(dummyScope.message).toBe(expectedMessage);
        }));
    });
    
})