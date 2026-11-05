(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LoginFrame");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,945);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "email","type" : "STRING","size" : "256"},{"id" : "password","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStatus", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "256"},{"id" : "message","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new ImageViewer("img00","298","299","250","362",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_image("url(\'theme://images/logo1.png\')");
            obj.set_fittocontents("none");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Div("div00",null,"186","478","146","298",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img00","215","0","48","48",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_image("url(\'theme://images/logo.png\')");
            this.div00.addChild(obj.name, obj);

            obj = new Div("div00","0",null,null,"74","0","0",null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00","0","0",null,"38","0",null,null,null,null,null,this.div00.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("Log in to your account");
            obj.set_font("normal 600 30px/38px \"Segoe UI\"");
            obj.set_color("#101828");
            obj.set_textAlign("center");
            this.div00.form.div00.addChild(obj.name, obj);

            obj = new Static("sta01","0","40",null,"24","0",null,null,null,null,null,this.div00.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("Welcome back! Please enter your details.");
            obj.set_font("normal 400 16px/24px \"Segoe UI\"");
            obj.set_textAlign("center");
            obj.set_color("#667085");
            this.div00.form.div00.addChild(obj.name, obj);

            obj = new Div("div01",null,"381","478","160","298",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div01");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","0",null,"70","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00","0","0","120","20",null,null,null,null,null,null,this.div01.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("Email");
            obj.set_font("normal 500 14px/20px \"Segoe UI\"");
            obj.set_color("#48505e");
            this.div01.form.div00.addChild(obj.name, obj);

            obj = new Edit("edtEmail","0",null,null,"44","0","0",null,null,null,null,this.div01.form.div00.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("Enter your email");
            obj.set_font("normal 400 16px/24px \"Segoe UI\"");
            obj.set_borderRadius("8px");
            this.div01.form.div00.addChild(obj.name, obj);

            obj = new Div("div00_00","0",null,null,"70","0","0",null,null,null,null,this.div01.form);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00","0","0","120","20",null,null,null,null,null,null,this.div01.form.div00_00.form);
            obj.set_taborder("0");
            obj.set_text("Password");
            obj.set_font("normal 500 14px/20px \"Segoe UI\"");
            obj.set_color("#48505e");
            this.div01.form.div00_00.addChild(obj.name, obj);

            obj = new Edit("edtPassword","0",null,null,"44","0","0",null,null,null,null,this.div01.form.div00_00.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("Enter your password");
            obj.set_font("normal 400 16px/24px \"Segoe UI\"");
            obj.set_borderRadius("8px");
            obj.set_password("true");
            this.div01.form.div00_00.addChild(obj.name, obj);

            obj = new Div("div02",null,"565","478","20","298",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkRemember","0","0","177",null,null,"0",null,null,null,null,this.div02.form);
            obj.set_taborder("0");
            obj.set_text("Remember for 30 days");
            obj.set_color("#48505e");
            obj.set_font("normal 500 14px/20px \"Segoe UI\"");
            this.div02.addChild(obj.name, obj);

            obj = new Button("btnForgot",null,"0","120","20","0",null,null,null,null,null,this.div02.form);
            obj.set_taborder("1");
            obj.set_text("Forgot password");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_color("#1366D9");
            obj.set_font("normal 500 14px/20px \"Segoe UI\"");
            obj.set_textAlign("right");
            this.div02.addChild(obj.name, obj);

            obj = new Button("btnSignIn",null,"609","478","44","298",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Sign in");
            obj.set_background("#1366D9");
            obj.set_borderRadius("4px");
            obj.set_font("normal 500 16px/24px \"Segoe UI\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Div("div03",null,"660","478","20","298",null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","140","0","155",null,null,"0",null,null,null,null,this.div03.form);
            obj.set_taborder("0");
            obj.set_text("Don’t have an account?");
            obj.set_color("#667085");
            obj.set_font("normal 400 14px/20px \"Segoe UI\"");
            this.div03.addChild(obj.name, obj);

            obj = new Button("btnSignup","297","0","70","20",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("1");
            obj.set_color("#1366d9");
            obj.set_text("Sign up");
            obj.set_font("normal 500 14px/20px \"Segoe UI\"");
            obj.set_background("transparent");
            obj.set_border("0px none");
            this.div03.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form.div00.form
            obj = new Layout("default","",0,0,this.div00.form.div00.form,function(p){});
            this.div00.form.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01.form.div00.form
            obj = new Layout("default","",0,0,this.div01.form.div00.form,function(p){});
            this.div01.form.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01.form.div00_00.form
            obj = new Layout("default","",0,0,this.div01.form.div00_00.form,function(p){});
            this.div01.form.div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01.form
            obj = new Layout("default","",0,0,this.div01.form,function(p){});
            this.div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div02.form
            obj = new Layout("default","",0,0,this.div02.form,function(p){});
            this.div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div03.form
            obj = new Layout("default","",0,0,this.div03.form,function(p){});
            this.div03.form.addLayout(obj.name, obj);

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
        this.registerScript("LoginFrame.xfdl", function() {

        this.fnGetRememberStorage = function()
        {
            try {
                if (!window || !window.localStorage) {
                    return null;
                }

                var saved = window.localStorage.getItem("kanban_last_login");
                if (!saved) {
                    return null;
                }

                var obj = JSON.parse(saved);
                if (!obj || !obj.expireAt) {
                    return null;
                }

                var now = new Date().getTime();
                if (now > Number(obj.expireAt)) {
                    window.localStorage.removeItem("kanban_last_login");
                    return null;
                }

                return obj;
            } catch (e) {
                return null;
            }
        };

        this.fnSetRememberStorage = function(email, password)
        {
            try {
                if (!window || !window.localStorage) {
                    return;
                }

                var now = new Date().getTime();
                var expireAt = now + (30 * 24 * 60 * 60 * 1000);
                var data = {
                    email: email,
                    password: password,
                    expireAt: expireAt
                };

                window.localStorage.setItem("kanban_last_login", JSON.stringify(data));
            } catch (e) {
            }
        };

        this.fnClearRememberStorage = function()
        {
            try {
                if (window && window.localStorage) {
                    window.localStorage.removeItem("kanban_last_login");
                }
            } catch (e) {
            }
        };

        this.LoginFrame_onload = function(obj, e)
        {
            var app = nexacro.getApplication();
            var saved = this.fnGetRememberStorage();

            if (app && (app.gvIsLoggedIn == true || app.gvIsLoggedIn == "true")) {
                var ownerFrame = this.getOwnerFrame();
                if (ownerFrame) {
                    ownerFrame.set_formurl("FrameBase::Main::Form_Dashboard.xfdl");
                }
                return;
            }

            if (saved) {
                if (app) {
                    app.gvIsLoggedIn = true;
                    app.gvUserEmail = saved.email;
                    if (app.showMainFrame) {
                        app.showMainFrame();
                    }
                }
                return;
            }

            var edtEmail = this.div01.form.div00.form.edtEmail;
            var edtPassword = this.div01.form.div00_00.form.edtPassword;
            var chkRemember = this.div02.form.chkRemember;

            edtEmail.value = "";
            edtPassword.value = "";
            chkRemember.value = false;
        };

        this.btnSignIn_onclick = function(obj, e)
        {
            var email = this.div01.form.div00.form.edtEmail.value;
            var password = this.div01.form.div00_00.form.edtPassword.value;
            var remember = this.div02.form.chkRemember.value == true;

            if (email == null || email == "") {
                alert("Please enter your email.");
                return;
            }

            if (password == null || password == "") {
                alert("Please enter your password.");
                return;
            }

            this._rememberLogin = remember;

            this.dsCond.clearData();
            var r = this.dsCond.addRow();
            this.dsCond.setColumn(r, "email", email);
            this.dsCond.setColumn(r, "password", password);

            var id = "login";
            var url = "http://localhost:8080/login/login";
            var reqDs = "dsInput=dsCond";
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
                alert("Login Fail");
                return;
            }

            var code = this.dsStatus.getColumn(0, "code");
            if (code > 0) {
                alert("Login Fail");
                return;
            }

            var app = nexacro.getApplication();
            var email = this.div01.form.div00.form.edtEmail.value;
            var password = this.div01.form.div00_00.form.edtPassword.value;

            if (app) {
                app.gvIsLoggedIn = true;
                app.gvUserEmail = email;
                if (app.showMainFrame) {
                    app.showMainFrame();
                }
            }

            if (this._rememberLogin == true) {
                this.fnSetRememberStorage(email, password);
            } else {
                this.fnClearRememberStorage();
            }
        };

        this.btnSignup_onclick = function(obj, e)
        {
            var parentFrame = this.getOwnerFrame();
            if (parentFrame) {
                parentFrame.set_formurl("frame::SignUpFrame.xfdl");
            }
        };

        this.btnForgot_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.LoginFrame_onload,this);
            this.div02.form.btnForgot.addEventHandler("onclick",this.btnForgot_onclick,this);
            this.btnSignIn.addEventHandler("onclick",this.btnSignIn_onclick,this);
            this.div03.form.btnSignup.addEventHandler("onclick",this.btnSignup_onclick,this);
        };
        this.loadIncludeScript("LoginFrame.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
