(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SignUpFrame");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,945);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"message\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRegisteredUsers", this);
            obj._setContents("<ColumnInfo><Column id=\"username\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"password\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new ImageViewer("img00","298","299","250","362",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_image("url(\'theme://images/logo1.png\')");
            obj.set_fittocontents("none");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Div("div00",null,"186","500","1000","198",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img00","215","0","48","48",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_image("url(\'theme://images/logo.png\')");
            this.div00.addChild(obj.name, obj);

            obj = new Div("div00","0","img00:5",null,"650","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"38","0",null,null,null,null,null,this.div00.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("Create an account");
            obj.set_font("normal 600 30px/38px \"Segoe UI\"");
            obj.set_color("#101828");
            obj.set_textAlign("center");
            this.div00.form.div00.addChild(obj.name, obj);

            obj = new Static("staSubtitle","0","40",null,"24","0",null,null,null,null,null,this.div00.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("Start your 30-day free trial.");
            obj.set_font("normal 400 16px/24px \"Segoe UI\"");
            obj.set_textAlign("center");
            obj.set_color("#667085");
            this.div00.form.div00.addChild(obj.name, obj);

            obj = new Static("staNameLabel",null,"staSubtitle:28","478","20","0",null,null,null,null,null,this.div00.form.div00.form);
            obj.set_taborder("12");
            obj.set_text("Name*");
            obj.set_font("normal 500 14px/20px \"Segoe UI\"");
            obj.set_color("#48505e");
            this.div00.form.div00.addChild(obj.name, obj);

            obj = new Edit("edtName",null,"staNameLabel:2","478","44","0",null,null,null,null,null,this.div00.form.div00.form);
            obj.set_taborder("13");
            obj.set_displaynulltext("Enter your name");
            obj.set_font("normal 400 16px/24px \"Segoe UI\"");
            obj.set_borderRadius("8px");
            this.div00.form.div00.addChild(obj.name, obj);

            obj = new Static("staNameMsg",null,"edtName:1","478","18","0",null,null,null,null,null,this.div00.form.div00.form);
            obj.set_taborder("16");
            obj.set_text("");
            obj.set_font("12px \'Arial\'");
            obj.set_color("#d93025");
            obj.set_visible("false");
            this.div00.form.div00.addChild(obj.name, obj);

            obj = new Static("staEmailLabel",null,"staNameMsg:1","478","20","0",null,null,null,null,null,this.div00.form.div00.form);
            obj.set_taborder("14");
            obj.set_text("Email*");
            obj.set_font("normal 500 14px/20px \"Segoe UI\"");
            obj.set_color("#48505e");
            this.div00.form.div00.addChild(obj.name, obj);

            obj = new Edit("edtEmail",null,"staEmailLabel:1","478","44","0",null,null,null,null,null,this.div00.form.div00.form);
            obj.set_taborder("15");
            obj.set_displaynulltext("Enter your email");
            obj.set_font("normal 400 16px/24px \"Segoe UI\"");
            obj.set_borderRadius("8px");
            obj.set_password("false");
            this.div00.form.div00.addChild(obj.name, obj);

            obj = new Static("staEmailMsg",null,"edtEmail:1","478","18","0",null,null,null,null,null,this.div00.form.div00.form);
            obj.set_taborder("11");
            obj.set_text("");
            obj.set_font("12px \'Arial\'");
            obj.set_color("#d93025");
            obj.set_visible("false");
            this.div00.form.div00.addChild(obj.name, obj);

            obj = new Static("staPasswordLabel",null,"staEmailMsg:1","472","20","0",null,null,null,null,null,this.div00.form.div00.form);
            obj.set_taborder("6");
            obj.set_text("Password*");
            obj.set_font("normal 500 14px/20px \"Segoe UI\"");
            obj.set_color("#48505e");
            this.div00.form.div00.addChild(obj.name, obj);

            obj = new Edit("edtPassword",null,"staPasswordLabel:1","478","44","0",null,null,null,null,null,this.div00.form.div00.form);
            obj.set_taborder("5");
            obj.set_displaynulltext("Enter your password");
            obj.set_font("normal 400 16px/24px \"Segoe UI\"");
            obj.set_borderRadius("8px");
            obj.set_password("true");
            this.div00.form.div00.addChild(obj.name, obj);

            obj = new Static("staPasswordMsg",null,"edtPassword:1","478","18","0",null,null,null,null,null,this.div00.form.div00.form);
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_font("12px \'Arial\'");
            obj.set_color("#d93025");
            obj.set_visible("false");
            this.div00.form.div00.addChild(obj.name, obj);

            obj = new Static("staConfirmPasswordLabel",null,"staPasswordMsg:1","478","20","0",null,null,null,null,null,this.div00.form.div00.form);
            obj.set_taborder("8");
            obj.set_text("Confirm password*");
            obj.set_font("normal 500 14px/20px \"Segoe UI\"");
            obj.set_color("#48505e");
            this.div00.form.div00.addChild(obj.name, obj);

            obj = new Edit("edtConfirmPassword",null,"staConfirmPasswordLabel:1","478","44","0",null,null,null,null,null,this.div00.form.div00.form);
            obj.set_taborder("7");
            obj.set_displaynulltext("Confirm your password");
            obj.set_font("normal 400 16px/24px \"Segoe UI\"");
            obj.set_borderRadius("8px");
            obj.set_password("true");
            this.div00.form.div00.addChild(obj.name, obj);

            obj = new Static("staConfirmPasswordMsg",null,"edtConfirmPassword:1","478","18","0",null,null,null,null,null,this.div00.form.div00.form);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_font("12px \'Arial\'");
            obj.set_color("#d93025");
            obj.set_visible("false");
            this.div00.form.div00.addChild(obj.name, obj);

            obj = new Static("staPasswordHint",null,"staConfirmPasswordMsg:17","478","27","0",null,null,null,null,null,this.div00.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("Must be at least 8 characters.");
            obj.set_font("13px \'Arial\'");
            obj.set_color("#7c8794");
            this.div00.form.div00.addChild(obj.name, obj);

            obj = new Button("btnGetStarted",null,"staPasswordHint:15","478","44","0",null,null,null,null,null,this.div00.form.div00.form);
            obj.set_taborder("3");
            obj.set_text("Create account");
            obj.set_background("#1366D9");
            obj.set_borderRadius("4px");
            obj.set_font("normal 500 16px/24px \"Segoe UI\"");
            obj.set_color("#ffffff");
            this.div00.form.div00.addChild(obj.name, obj);

            obj = new Static("staLogin",null,"btnGetStarted:20","200","22","100",null,null,null,null,null,this.div00.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("Already have an account?");
            obj.set_color("#667085");
            obj.set_font("normal 400 14px/20px \"Segoe UI\"");
            obj.set_textAlign("right");
            this.div00.form.div00.addChild(obj.name, obj);

            obj = new Button("btnSignup","staLogin:2","btnGetStarted:20",null,"20","0",null,null,null,null,null,this.div00.form.div00.form);
            obj.set_taborder("1");
            obj.set_color("#1366d9");
            obj.set_text("Sign up");
            obj.set_font("normal 500 14px/20px \"Segoe UI\"");
            obj.set_background("transparent");
            obj.set_border("0px none");
            this.div00.form.div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form.div00.form
            obj = new Layout("default","",0,0,this.div00.form.div00.form,function(p){});
            this.div00.form.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1920,945,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SignUpFrame.xfdl", function() {

        this.fnGetRegisterForm = function()
        {
            try {
                if (this.div00 && this.div00.form && this.div00.form.div00 && this.div00.form.div00.form) {
                    return this.div00.form.div00.form;
                }
                return null;
            } catch (e) {
                return null;
            }
        };

        this.fnGetRegisterField = function(fieldName)
        {
            var form = this.fnGetRegisterForm();
            if (!form || !fieldName) {
                return null;
            }
            return form[fieldName] || null;
        };

        this.fnResetValidation = function()
        {
            var form = this.fnGetRegisterForm();
            if (!form) {
                return;
            }

            var msgFields = ["staNameMsg", "staEmailMsg", "staPasswordMsg", "staConfirmPasswordMsg"];
            for (var i = 0; i < msgFields.length; i++) {
                var msg = this.fnGetRegisterField(msgFields[i]);
                if (msg) {
                    msg.set_visible(false);
                    msg.set_text("");
                }
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
                var msgName = this.fnGetRegisterField("staNameMsg");
                if (msgName) {
                    msgName.set_text(message);
                    msgName.set_visible(true);
                }
            } else if (field == "email") {
                var msgEmail = this.fnGetRegisterField("staEmailMsg");
                if (msgEmail) {
                    msgEmail.set_text(message);
                    msgEmail.set_visible(true);
                }
            } else if (field == "password") {
                var msgPassword = this.fnGetRegisterField("staPasswordMsg");
                if (msgPassword) {
                    msgPassword.set_text(message);
                    msgPassword.set_visible(true);
                }
            } else if (field == "confirm") {
                var msgConfirm = this.fnGetRegisterField("staConfirmPasswordMsg");
                if (msgConfirm) {
                    msgConfirm.set_text(message);
                    msgConfirm.set_visible(true);
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

        this.SignUpFrame_onload = function(obj, e)
        {
            this.addEventHandler("onsize", this.SignUpFrame_onsize, this);
            this.SignUpFrame_onsize();

            if (!this.dsRegisteredUsers) {
                this.dsRegisteredUsers = new nexacro.Dataset();
                this.dsRegisteredUsers.addColumn("EMAIL", "string");
                this.dsRegisteredUsers.addColumn("PASSWORD", "string");
                this.dsRegisteredUsers.addColumn("USERNAME", "string");
            }

            this.fnResetValidation();
        };

        this.SignUpFrame_onsize = function()
        {
            var formW = this.getOffsetWidth();
            var cardW = this.div00 ? this.div00.getOffsetWidth() : 600;

            if (this.div00) {
                this.div00.set_left((formW - cardW) / 2);
                this.div00.set_top(0);
            }
        };

        this.btnGetStarted_onclick = function(obj, e)
        {
            var form = this.fnGetRegisterForm();
            if (!form) {
                return;
            }

            this.fnResetValidation();

            var edtName = this.fnGetRegisterField("edtName");
            var edtEmail = this.fnGetRegisterField("edtEmail");
            var edtPassword = this.fnGetRegisterField("edtPassword");
            var edtConfirmPassword = this.fnGetRegisterField("edtConfirmPassword");

            if (!edtName || !edtEmail || !edtPassword || !edtConfirmPassword) {
                return;
            }

            var name = edtName.value;
            var email = edtEmail.value;
            var password = edtPassword.value;
            var confirmPassword = edtConfirmPassword.value;
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

            this.dsRegisteredUsers.clearData();
            var r = this.dsRegisteredUsers.addRow();
            this.dsRegisteredUsers.setColumn(r, "email", String(email).trim());
            this.dsRegisteredUsers.setColumn(r, "password", password);
            this.dsRegisteredUsers.setColumn(r, "username", name);

            var id = "register";
            var url = "http://localhost:8080/login/register";
            var reqDs = "dsInput=dsRegisteredUsers";
            var respDs = "dsStatus=ResultDataset";
            var args = "";
            var callback = "fnCallback";

            this.transaction(id, url, reqDs, respDs, args, callback);
        };

        this.fnCallback = function(svcID, errCD, errMsg)
        {
            if (errCD < 0) {
                alert(errMsg);
                return;
            }

            var cnt = this.dsStatus.getRowCount();
            if (cnt == 0) {
                alert("Register Fail");
                return;
            }

            var code = this.dsStatus.getColumn(0, "code");
            if (code > 0) {
                alert(this.dsStatus.getColumn(0, "message"));
                return;
            }

            alert("Account created successfully.");

            var form = this.fnGetRegisterForm();
            if (form) {
                var clearName = this.fnGetRegisterField("edtName");
                var clearEmail = this.fnGetRegisterField("edtEmail");
                var clearPassword = this.fnGetRegisterField("edtPassword");
                var clearConfirm = this.fnGetRegisterField("edtConfirmPassword");

                if (clearName) clearName.set_value("");
                if (clearEmail) clearEmail.set_value("");
                if (clearPassword) clearPassword.set_value("");
                if (clearConfirm) clearConfirm.set_value("");
            }

            this.fnResetValidation();

            var ownerFrame = this.getOwnerFrame();
            if (ownerFrame) {
                ownerFrame.set_formurl("frame::LoginFrame.xfdl");
            }
        };

        this.btnSignup_onclick = function(obj, e)
        {
            var parentFrame = this.getOwnerFrame();
            if (parentFrame) {
                parentFrame.set_formurl("frame::LoginFrame.xfdl");
            }
        };

        this.staLogin_onclick = function(obj, e)
        {
            var parentFrame = this.getOwnerFrame();
            if (parentFrame) {
                parentFrame.set_formurl("frame::LoginFrame.xfdl");
            }
        };

        this.btnForgot_onclick = function(obj, e)
        {
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SignUpFrame_onload,this);
            this.div00.form.div00.form.btnGetStarted.addEventHandler("onclick",this.btnGetStarted_onclick,this);
            this.div00.form.div00.form.staLogin.addEventHandler("onclick",this.staLogin_onclick,this);
            this.div00.form.div00.form.btnSignup.addEventHandler("onclick",this.btnSignup_onclick,this);
        };
        this.loadIncludeScript("SignUpFrame.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
