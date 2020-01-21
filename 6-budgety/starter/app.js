// BUDGET CONTROLLER
var budgetController = (function() {  

    var Expense = function(id, description, value) {
        this.id = id
        this.description = description
        this.value = value
    }

    var Income = function(id, description, value) {
        this.id = id
        this.description = description
        this.value = value
    }

    var allExpenses = []

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }

    return {
        addItem: function(type, des, val) {
            var newItem, ID
            
            // Create new ID
            if (data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1
            } else {
                ID = 0
            }

            // Creat new item based on 'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val)
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val)
            }

            // Push it into our data structure
            data.allItems[type].push(newItem);

            // Return the new element
            return newItem
        },

        testing: function() {
            console.log(data)
        }
    }
})();




// UI CONTROLLER
var UIController = (function() {
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
                descrption: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            }
        },

        addListItem: function(obj, type) {
            var html, newHtml, element
            // Create HTML string with placeholder text
            if (type === 'inc') {
                element = DOMstrings.incomeContainer

                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            } else if (type === 'exp') {
                element = DOMstrings.expensesContainer

                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }
            // Replace the placeholder text with actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            // Insert HTML into DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml)
        },

        clearFields: function() {
            var field, fieldsArr

            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function(current, index, array) {
                current.value = ""
            })
            fieldsArr[0].focus();
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    }

})();




// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeners = function() {

        var DOM = UICtrl.getDOMstrings()

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)

        document.addEventListener('keypress', function(event) {

            if (event.keyCode === 13 || event.which === 13) {ctrlAddItem()}
        })
    }

    var updateBudget = function() {

        // TODO 1. Calculate the budget
        
        // TODO 2. Return the budget

        // TODO 3. Display the budget on the UI

    }

    var ctrlAddItem = function() {
        var input, newItem

        // TODO 1. Get the field input data
        input = UICtrl.getInput();

        if (input.description !== "" && !isNan(input.value) && input.value > 0) {

        // TODO 2. Add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.descrption, input.value)

        // TODO 3. Add the item to the UI
        UICtrl.addListItem(newItem, input.type)

        // TODO 4. Clear the fields
        UICtrl.clearFields();

        // TODO 5. Calculate and update Budget
        updateBudget()

        }

    }

    return {
        init: function() {
            console.log('Application has started.')
            setupEventListeners()
        }
    }


})(budgetController, UIController);

controller.init()