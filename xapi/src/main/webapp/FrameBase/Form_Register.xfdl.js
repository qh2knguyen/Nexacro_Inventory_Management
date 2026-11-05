(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Register");
            this.set_titletext("KANBAN Register");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRegisteredUsers", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "username","type" : "STRING","size" : "256"},{"id" : "email","type" : "STRING","size" : "256"},{"id" : "password","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStatus", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "256"},{"id" : "message","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divMain","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Div("divCenter","0","0","100%","100%",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("0");
            obj.set_background("transparent");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staLogoWrap","20%","25%","260","260",null,null,null,null,null,null,this.divMain.form.divCenter.form);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            obj.set_border("0px solid transparent");
            obj.set_text("");
            obj.set_visible("true");
            this.divMain.form.divCenter.addChild(obj.name, obj);

            obj = new ImageViewer("imgLogo","staLogoWrap:-88.85%","28.47%","210","210",null,null,null,null,null,null,this.divMain.form.divCenter.form);
            obj.set_taborder("1");
            obj.set_image("url(\'theme://images/logo.png\')");
            obj.set_stretch("fit");
            obj.set_border("0px none");
            obj.set_background("transparent");
            obj.set_text("");
            this.divMain.form.divCenter.addChild(obj.name, obj);

            obj = new Static("staBrand","21.00%","staLogoWrap:1","245","60",null,null,null,null,null,null,this.divMain.form.divCenter.form);
            obj.set_taborder("2");
            obj.set_text("KANBAN");
            obj.set_font("bold 36px \'Arial\'");
            obj.set_color("#0f7ad9");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divMain.form.divCenter.addChild(obj.name, obj);

            obj = new Div("divRegister","60%","20","430","680",null,null,null,null,null,null,this.divMain.form.divCenter.form);
            obj.set_taborder("3");
            obj.set_background("transparent");
            this.divMain.form.divCenter.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","300","50",null,null,null,null,null,null,this.divMain.form.divCenter.form.divRegister.form);
            obj.set_taborder("0");
            obj.set_text("Create an account");
            obj.set_font("bold 30px \'Arial\'");
            obj.set_color("#1e2b3a");
            obj.set_textAlign("left");
            this.divMain.form.divCenter.form.divRegister.addChild(obj.name, obj);

            obj = new Static("staSubtitle","0","42","300","24",null,null,null,null,null,null,this.divMain.form.divCenter.form.divRegister.form);
            obj.set_taborder("1");
            obj.set_text("Start your 30-day free trial.");
            obj.set_font("16px \'Arial\'");
            obj.set_color("#7c8794");
            this.divMain.form.divCenter.form.divRegister.addChild(obj.name, obj);

            obj = new Static("staNameLabel","0","94","90","22",null,null,null,null,null,null,this.divMain.form.divCenter.form.divRegister.form);
            obj.set_taborder("2");
            obj.set_text("Name*");
            obj.set_font("16px \'Arial\'");
            obj.set_color("#2c3a4a");
            this.divMain.form.divCenter.form.divRegister.addChild(obj.name, obj);

            obj = new Edit("edtName","0","120","420","48",null,null,null,null,null,null,this.divMain.form.divCenter.form.divRegister.form);
            obj.set_taborder("3");
            obj.set_value("");
            obj.set_border("1px solid #d8dfe7");
            obj.set_background("#ffffff");
            obj.set_color("#374151");
            obj.set_displaynulltext("Enter your name");
            obj.set_font("16px \'Arial\'");
            this.divMain.form.divCenter.form.divRegister.addChild(obj.name, obj);

            obj = new Static("staNameMsg","0","168","420","18",null,null,null,null,null,null,this.divMain.form.divCenter.form.divRegister.form);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_font("12px \'Arial\'");
            obj.set_color("#d93025");
            obj.set_visible("false");
            this.divMain.form.divCenter.form.divRegister.addChild(obj.name, obj);

            obj = new Static("staEmailLabel","0","180","90","22",null,null,null,null,null,null,this.divMain.form.divCenter.form.divRegister.form);
            obj.set_taborder("5");
            obj.set_text("Email*");
            obj.set_font("16px \'Arial\'");
            obj.set_color("#2c3a4a");
            this.divMain.form.divCenter.form.divRegister.addChild(obj.name, obj);

            obj = new Edit("edtEmail","0","206","420","48",null,null,null,null,null,null,this.divMain.form.divCenter.form.divRegister.form);
            obj.set_taborder("5");
            obj.set_value("");
            obj.set_border("1px solid #d8dfe7");
            obj.set_background("#ffffff");
            obj.set_color("#374151");
            obj.set_displaynulltext("Enter your email");
            obj.set_font("16px \'Arial\'");
            this.divMain.form.divCenter.form.divRegister.addChild(obj.name, obj);

            obj = new Static("staEmailMsg","0","254","420","18",null,null,null,null,null,null,this.divMain.form.divCenter.form.divRegister.form);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_font("12px \'Arial\'");
            obj.set_color("#d93025");
            obj.set_visible("false");
            this.divMain.form.divCenter.form.divRegister.addChild(obj.name, obj);

            obj = new Static("staPasswordLabel","0","282","110","22",null,null,null,null,null,null,this.divMain.form.divCenter.form.divRegister.form);
            obj.set_taborder("7");
            obj.set_text("Password*");
            obj.set_font("16px \'Arial\'");
            obj.set_color("#2c3a4a");
            this.divMain.form.divCenter.form.divRegister.addChild(obj.name, obj);

            obj = new Edit("edtPassword","0","308","420","48",null,null,null,null,null,null,this.divMain.form.divCenter.form.divRegister.form);
            obj.set_taborder("8");
            obj.set_value("");
            obj.set_password("true");
            obj.set_border("1px solid #d8dfe7");
            obj.set_background("#ffffff");
            obj.set_color("#374151");
            obj.set_displaynulltext("Create a password");
            obj.set_font("16px \'Arial\'");
            this.divMain.form.divCenter.form.divRegister.addChild(obj.name, obj);

            obj = new Static("staPasswordMsg","0","356","420","18",null,null,null,null,null,null,this.divMain.form.divCenter.form.divRegister.form);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_font("12px \'Arial\'");
            obj.set_color("#d93025");
            obj.set_visible("false");
            this.divMain.form.divCenter.form.divRegister.addChild(obj.name, obj);

            obj = new Static("staConfirmPasswordLabel","0","382","150","22",null,null,null,null,null,null,this.divMain.form.divCenter.form.divRegister.form);
            obj.set_taborder("10");
            obj.set_text("Confirm password*");
            obj.set_font("16px \'Arial\'");
            obj.set_color("#2c3a4a");
            this.divMain.form.divCenter.form.divRegister.addChild(obj.name, obj);

            obj = new Edit("edtConfirmPassword","0","408","420","48",null,null,null,null,null,null,this.divMain.form.divCenter.form.divRegister.form);
            obj.set_taborder("11");
            obj.set_value("");
            obj.set_password("true");
            obj.set_border("1px solid #d8dfe7");
            obj.set_background("#ffffff");
            obj.set_color("#374151");
            obj.set_displaynulltext("Confirm your password");
            obj.set_font("16px \'Arial\'");
            this.divMain.form.divCenter.form.divRegister.addChild(obj.name, obj);

            obj = new Static("staConfirmPasswordMsg","0","456","420","18",null,null,null,null,null,null,this.divMain.form.divCenter.form.divRegister.form);
            obj.set_taborder("12");
            obj.set_text("");
            obj.set_font("12px \'Arial\'");
            obj.set_color("#d93025");
            obj.set_visible("false");
            this.divMain.form.divCenter.form.divRegister.addChild(obj.name, obj);

            obj = new Static("staPasswordHint","0","520","300","20",null,null,null,null,null,null,this.divMain.form.divCenter.form.divRegister.form);
            obj.set_taborder("13");
            obj.set_text("Must be at least 8 characters.");
            obj.set_font("13px \'Arial\'");
            obj.set_color("#7c8794");
            this.divMain.form.divCenter.form.divRegister.addChild(obj.name, obj);

            obj = new Button("btnGetStarted","0","560","420","52",null,null,null,null,null,null,this.divMain.form.divCenter.form.divRegister.form);
            obj.set_taborder("14");
            obj.set_text("Create account");
            obj.set_background("#0d7ae6");
            obj.set_border("0px none");
            obj.set_color("#ffffff");
            obj.set_font("bold 18px \'Arial\'");
            this.divMain.form.divCenter.form.divRegister.addChild(obj.name, obj);

            obj = new Static("staLogin","75","628","237","24",null,null,null,null,null,null,this.divMain.form.divCenter.form.divRegister.form);
            obj.set_taborder("15");
            obj.set_text("Already have an account?");
            obj.set_font("16px \'Arial\'");
            obj.set_color("#394556");
            obj.set_textAlign("right");
            this.divMain.form.divCenter.form.divRegister.addChild(obj.name, obj);

            obj = new Button("btnLogin","staLogin:2","628","60","24",null,null,null,null,null,null,this.divMain.form.divCenter.form.divRegister.form);
            obj.set_taborder("17");
            obj.set_text("Log in");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_color("#2d74d9");
            obj.set_font("16px \'Arial\'");
            obj.set_textAlign("left");
            this.divMain.form.divCenter.form.divRegister.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMain.form.divCenter.form.divRegister.form
            obj = new Layout("default","",0,0,this.divMain.form.divCenter.form.divRegister.form,function(p){});
            this.divMain.form.divCenter.form.divRegister.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divCenter.form
            obj = new Layout("default","",0,0,this.divMain.form.divCenter.form,function(p){});
            this.divMain.form.divCenter.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form
            obj = new Layout("default","",0,0,this.divMain.form,function(p){});
            this.divMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Register.xfdl", function() {

        this.Form_Register_onload = function(obj, e)
        {
            this.addEventHandler("onsize", this.Form_Register_onsize, this);
            this.Form_Register_onsize();

            if (this.dsRegisteredUsers == null) {
                this.dsRegisteredUsers = new nexacro.Dataset();
                this.dsRegisteredUsers.addColumn("EMAIL", "string");
            }
        };

        this.Form_Register_onsize = function()
        {
            var formW = this.getOffsetWidth();
            var formH = this.getOffsetHeight();
            var centerW = this.divMain.form.divCenter.getOffsetWidth();
            var centerH = this.divMain.form.divCenter.getOffsetHeight();

            this.divMain.set_left(0);
            this.divMain.set_top(0);
            this.divMain.set_right(0);
            this.divMain.set_bottom(0);

            this.divMain.form.divCenter.set_left((formW - centerW) / 2);
            this.divMain.form.divCenter.set_top((formH - centerH) / 2);
        };

        this.fnGetRegisterForm = function()
        {
            try {
                var divCenter = this.divMain && this.divMain.form && this.divMain.form.divCenter;
                var divRegister = divCenter && divCenter.form && divCenter.form.divRegister;
                var form = divRegister && divRegister.form ? divRegister.form : (divRegister || null);
                return form;
            } catch (e) {
                return null;
            }
        };

        this.fnResetValidation = function()
        {
            var form = this.fnGetRegisterForm();
            if (!form) {
                return;
            }

            var msgName = form.components ? form.components["staNameMsg"] : form.staNameMsg;
            var msgEmail = form.components ? form.components["staEmailMsg"] : form.staEmailMsg;
            var msgPassword = form.components ? form.components["staPasswordMsg"] : form.staPasswordMsg;
            var msgConfirm = form.components ? form.components["staConfirmPasswordMsg"] : form.staConfirmPasswordMsg;

            if (msgName) {
                msgName.visible = false;
                msgName.set_text("");
            }
            if (msgEmail) {
                msgEmail.visible = false;
                msgEmail.set_text("");
            }
            if (msgPassword) {
                msgPassword.visible = false;
                msgPassword.set_text("");
            }
            if (msgConfirm) {
                msgConfirm.visible = false;
                msgConfirm.set_text("");
            }
        };

        this.fnIsValidEmail = function(email)
        {
            if (email == null || String(email).trim() == "") {
                return false;
            }

            var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return pattern.test(String(email).trim());
        };

        this.fnSetError = function(field, message)
        {
            var form = this.fnGetRegisterForm();
            if (!form) {
                return;
            }

            if (field == "name") {
                var msgName = form.components ? form.components["staNameMsg"] : form.staNameMsg;
                if (msgName) {
                    msgName.set_text(message);
                    msgName.visible = true;
                }
            } else if (field == "email") {
                var msgEmail = form.components ? form.components["staEmailMsg"] : form.staEmailMsg;
                if (msgEmail) {
                    msgEmail.set_text(message);
                    msgEmail.visible = true;
                }
            } else if (field == "password") {
                var msgPassword = form.components ? form.components["staPasswordMsg"] : form.staPasswordMsg;
                if (msgPassword) {
                    msgPassword.set_text(message);
                    msgPassword.visible = true;
                }
            } else if (field == "confirm") {
                var msgConfirm = form.components ? form.components["staConfirmPasswordMsg"] : form.staConfirmPasswordMsg;
                if (msgConfirm) {
                    msgConfirm.set_text(message);
                    msgConfirm.visible = true;
                }
            }
        };

        this.fnIsEmailTaken = function(email)
        {
            if (!this.dsRegisteredUsers || this.dsRegisteredUsers.rowcount == 0) {
                return false;
            }

            var lowerEmail = String(email).toLowerCase();
            for (var i = 0; i < this.dsRegisteredUsers.rowcount; i++) {
                var savedEmail = String(this.dsRegisteredUsers.getColumn(i, "EMAIL")).toLowerCase();
                if (savedEmail == lowerEmail) {
                    return true;
                }
            }
            return false;
        };

        this.btnGetStarted_onclick = function(obj, e)
        {
            this.fnResetValidation();

            var form = this.divMain.form.divCenter.form.divRegister.form;
            var name = form.edtName.value;
            var email = form.edtEmail.value;
            var password = form.edtPassword.value;
            var confirmPassword = form.edtConfirmPassword.value;
            var isValid = true;

            if (name == null || String(name).trim() == "") {
                this.fnSetError("name", "Please enter your name.");
                isValid = false;
            }

            if (email == null || String(email).trim() == "") {
                this.fnSetError("email", "Please enter your email.");
                isValid = false;
            } else if (!this.fnIsValidEmail(email)) {
                this.fnSetError("email", "Please enter a valid email address.");
                isValid = false;
            } else if (this.fnIsEmailTaken(email)) {
                this.fnSetError("email", "This email is already registered.");
                isValid = false;
            }

            if (password == null || String(password).trim() == "") {
                this.fnSetError("password", "Please enter your password.");
                isValid = false;
            } else if (String(password).length < 8) {
                this.fnSetError("password", "Password must be at least 8 characters.");
                isValid = false;
            }

            if (confirmPassword == null || String(confirmPassword).trim() == "") {
                this.fnSetError("confirm", "Please confirm your password.");
                isValid = false;
            } else if (String(password) != String(confirmPassword)) {
                this.fnSetError("confirm", "Passwords do not match.");
                isValid = false;
            }

            if (!isValid) {
                return;
            }

            var row = this.dsRegisteredUsers.addRow();
            this.dsRegisteredUsers.setColumn(row, "EMAIL", String(email).trim());

            this.dsRegisteredUsers.clearData();
            var r = this.dsRegisteredUsers.addRow();
            this.dsRegisteredUsers.setColumn(r, "email", email);
            this.dsRegisteredUsers.setColumn(r, "password",   password);
        	this.dsRegisteredUsers.setColumn(r, "username",   name);

        	var id = "login";
        	var url = "http://localhost:8080/login/register";
        	var reqDs = "dsInput=dsRegisteredUsers";
        	var respDs = "dsStatus=ResultDataset";
        	var args = "";
        	var callback = "fnCallback";

        	this.transaction(id, url, reqDs, respDs, args, callback);
        };

        /*----------------------------------------------------
         | Callback
         ----------------------------------------------------*/
        this.fnCallback = function (svcID, errCD, errMsg)
        {
            if (errCD < 0) {
                alert(errMsg);
                return;
            }
        	const cnt =  this.dsStatus.getRowCount();
        	if(cnt == 0 ){
        		alert('Login Fail');
        	}else{
        		const code = this.dsStatus.getColumn(0, 'code');
        		if( code > 0 ){
        			alert(this.dsStatus.getColumn(0, 'message'));
        		}else{

        			alert("Account created successfully.");
        			var form = this.divMain.form.divCenter.form.divRegister.form;
        			if (form) {
        				form.edtName.set_value("");
        				form.edtEmail.set_value("");
        				form.edtPassword.set_value("");
        				form.edtConfirmPassword.set_value("");
        			}
        			this.fnResetValidation();
        			var parentFrame = this.getOwnerFrame();
        			if (parentFrame) {
        				parentFrame.set_formurl("FrameBase::Form_Login.xfdl");
        			}
        		}
        	}
        };


        this.staLogin_onclick = function(obj, e)
        {
            var parentFrame = this.getOwnerFrame();
            if (parentFrame) {
                parentFrame.set_formurl("FrameBase::Form_Login.xfdl");
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Register_onload,this);
            this.divMain.form.divCenter.form.divRegister.form.btnGetStarted.addEventHandler("onclick",this.btnGetStarted_onclick,this);
            this.divMain.form.divCenter.form.divRegister.form.btnLogin.addEventHandler("onclick",this.staLogin_onclick,this);
        };
        this.loadIncludeScript("Form_Register.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
