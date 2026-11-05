(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Login");
            this.set_titletext("KANBAN Login");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "email","type" : "STRING","size" : "256"},{"id" : "password","type" : "STRING","size" : "256"}]}});
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
            this.divMain.form.divCenter.addChild(obj.name, obj);

            obj = new Static("staBrand","21.00%","staLogoWrap:10","245","60",null,null,null,null,null,null,this.divMain.form.divCenter.form);
            obj.set_taborder("2");
            obj.set_text("KANBAN");
            obj.set_font("bold 36px \'Arial\'");
            obj.set_color("#0f7ad9");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divMain.form.divCenter.addChild(obj.name, obj);

            obj = new Div("divLogin","60%","90","430","520",null,null,null,null,null,null,this.divMain.form.divCenter.form);
            obj.set_taborder("3");
            obj.set_background("transparent");
            this.divMain.form.divCenter.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","420","46",null,null,null,null,null,null,this.divMain.form.divCenter.form.divLogin.form);
            obj.set_taborder("0");
            obj.set_text("Log in to your account");
            obj.set_font("bold 30px \'Arial\'");
            obj.set_color("#1e2b3a");
            obj.set_textAlign("left");
            this.divMain.form.divCenter.form.divLogin.addChild(obj.name, obj);

            obj = new Static("staSubtitle","0","48","420","24",null,null,null,null,null,null,this.divMain.form.divCenter.form.divLogin.form);
            obj.set_taborder("1");
            obj.set_text("Welcome back! Please enter your details.");
            obj.set_font("16px \'Arial\'");
            obj.set_color("#7c8794");
            this.divMain.form.divCenter.form.divLogin.addChild(obj.name, obj);

            obj = new Static("staEmailLabel","0","100","80","22",null,null,null,null,null,null,this.divMain.form.divCenter.form.divLogin.form);
            obj.set_taborder("2");
            obj.set_text("Email");
            obj.set_font("16px \'Arial\'");
            obj.set_color("#2c3a4a");
            this.divMain.form.divCenter.form.divLogin.addChild(obj.name, obj);

            obj = new Edit("edtEmail","0","126","420","48",null,null,null,null,null,null,this.divMain.form.divCenter.form.divLogin.form);
            obj.set_taborder("3");
            obj.set_value("");
            obj.set_border("1px solid #d8dfe7");
            obj.set_background("#ffffff");
            obj.set_color("#374151");
            obj.set_displaynulltext("Enter your email");
            obj.set_font("16px \'Arial\'");
            this.divMain.form.divCenter.form.divLogin.addChild(obj.name, obj);

            obj = new Static("staPasswordLabel","0","190","90","22",null,null,null,null,null,null,this.divMain.form.divCenter.form.divLogin.form);
            obj.set_taborder("4");
            obj.set_text("Password");
            obj.set_font("16px \'Arial\'");
            obj.set_color("#2c3a4a");
            this.divMain.form.divCenter.form.divLogin.addChild(obj.name, obj);

            obj = new Edit("edtPassword","0","216","420","48",null,null,null,null,null,null,this.divMain.form.divCenter.form.divLogin.form);
            obj.set_taborder("5");
            obj.set_value("");
            obj.set_password("true");
            obj.set_border("1px solid #d8dfe7");
            obj.set_background("#ffffff");
            obj.set_color("#374151");
            obj.set_displaynulltext("********");
            obj.set_font("16px \'Arial\'");
            this.divMain.form.divCenter.form.divLogin.addChild(obj.name, obj);

            obj = new CheckBox("chkRemember","0","286","190","20",null,null,null,null,null,null,this.divMain.form.divCenter.form.divLogin.form);
            obj.set_taborder("6");
            obj.set_text("Remember for 30 days");
            obj.set_font("16px \'Arial\'");
            obj.set_color("#4b5563");
            obj.set_value("false");
            this.divMain.form.divCenter.form.divLogin.addChild(obj.name, obj);

            obj = new Button("btnForgot","300","282","120","28",null,null,null,null,null,null,this.divMain.form.divCenter.form.divLogin.form);
            obj.set_taborder("7");
            obj.set_text("Forgot password");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_color("#2d74d9");
            obj.set_font("16px \'Arial\'");
            this.divMain.form.divCenter.form.divLogin.addChild(obj.name, obj);

            obj = new Button("btnSignIn","0","332","420","52",null,null,null,null,null,null,this.divMain.form.divCenter.form.divLogin.form);
            obj.set_taborder("8");
            obj.set_text("Sign in");
            obj.set_background("#0d7ae6");
            obj.set_border("0px none");
            obj.set_color("#ffffff");
            obj.set_font("bold 18px \'Arial\'");
            this.divMain.form.divCenter.form.divLogin.addChild(obj.name, obj);

            obj = new Static("staSignup","152","410","207","28",null,null,null,null,null,null,this.divMain.form.divCenter.form.divLogin.form);
            obj.set_taborder("9");
            obj.set_text("Don\'t have an account? ");
            obj.set_font("16px \'Arial\'");
            obj.set_color("#394556");
            obj.set_textAlign("right");
            this.divMain.form.divCenter.form.divLogin.addChild(obj.name, obj);

            obj = new Button("btnSignup","staSignup:2","410","60","28",null,null,null,null,null,null,this.divMain.form.divCenter.form.divLogin.form);
            obj.set_taborder("10");
            obj.set_text("Sign up");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_color("#2d74d9");
            obj.set_font("16px \'Arial\'");
            obj.set_textAlign("left");
            this.divMain.form.divCenter.form.divLogin.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMain.form.divCenter.form.divLogin.form
            obj = new Layout("default","",0,0,this.divMain.form.divCenter.form.divLogin.form,function(p){});
            this.divMain.form.divCenter.form.divLogin.form.addLayout(obj.name, obj);

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
        this.registerScript("Form_Login.xfdl", function() {

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

        this.Form_Login_onload = function(obj, e)
        {
            var app = nexacro.getApplication();
            var saved = this.fnGetRememberStorage();

            if (app && (app.gvIsLoggedIn == true || app.gvIsLoggedIn == "true")) {
                var ownerFrame = this.getOwnerFrame();
                if (ownerFrame) {
                    ownerFrame.set_formurl("FrameBase::Form_Dashboard.xfdl");
                }
                return;
            }

            if (saved) {
                if (app) {
                    app.gvIsLoggedIn = true;
                    app.gvUserEmail = saved.email;
                }

                var ownerFrame = this.getOwnerFrame();
                if (ownerFrame) {
                    ownerFrame.set_formurl("FrameBase::Form_Dashboard.xfdl");
                }
                return;
            }

            this.addEventHandler("onsize", this.Form_Login_onsize, this);
            this.Form_Login_onsize();

            var edtEmail = this.divMain.form.divCenter.form.divLogin.form.edtEmail;
            var edtPassword = this.divMain.form.divCenter.form.divLogin.form.edtPassword;
            var chkRemember = this.divMain.form.divCenter.form.divLogin.form.chkRemember;

            edtEmail.set_value("");
            edtPassword.set_value("");
            chkRemember.set_value(false);
        };

        this.Form_Login_onsize = function()
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

        this.btnSignIn_onclick = function(obj, e)
        {
            var email = this.divMain.form.divCenter.form.divLogin.form.edtEmail.value;
            var password = this.divMain.form.divCenter.form.divLogin.form.edtPassword.value;
            var remember = this.divMain.form.divCenter.form.divLogin.form.chkRemember.value == true;

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
            this.dsCond.setColumn(r, "password",   password);

        	var id = "login";
        	var url = "http://localhost:8080/login/login";
        	var reqDs = "dsInput=dsCond";
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
        		if(code > 0 ){
        		alert('Login Fail');
        		}else{
        		var app = nexacro.getApplication();
        		var email = this.divMain.form.divCenter.form.divLogin.form.edtEmail.value;
        		var password = this.divMain.form.divCenter.form.divLogin.form.edtPassword.value;
        		if (app) {
        			app.gvIsLoggedIn = true;
        			app.gvUserEmail = email;
        		}
        		if (this._rememberLogin == true) {
        			this.fnSetRememberStorage(email, password);
        		} else {
        			this.fnClearRememberStorage();
        		}
        		var ownerFrame = this.getOwnerFrame();
                    if (ownerFrame) {
                        ownerFrame.set_formurl("FrameBase::Form_Dashboard.xfdl");
                    }
        		}
        	}
        };

        this.btnForgot_onclick = function(obj, e)
        {
            alert("Forgot password clicked");
        };

        this.divMain_imgLogo_onclick = function(obj,e)
        {

        };

        this.btnSignup_onclick = function(obj,e)
        {
            var parentFrame = this.getOwnerFrame();
            if (parentFrame) {
                parentFrame.set_formurl("FrameBase::Form_Register.xfdl");
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Login_onload,this);
            this.divMain.form.divCenter.form.imgLogo.addEventHandler("onclick",this.divMain_imgLogo_onclick,this);
            this.divMain.form.divCenter.form.divLogin.form.btnForgot.addEventHandler("onclick",this.btnForgot_onclick,this);
            this.divMain.form.divCenter.form.divLogin.form.btnSignIn.addEventHandler("onclick",this.btnSignIn_onclick,this);
            this.divMain.form.divCenter.form.divLogin.form.btnSignup.addEventHandler("onclick",this.btnSignup_onclick,this);
        };
        this.loadIncludeScript("Form_Login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
