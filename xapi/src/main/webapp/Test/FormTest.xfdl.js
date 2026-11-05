(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FormTest");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new DataObject("dsMenu", this);
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gridExpr", this);
            obj._setContents("<ColumnInfo><Column id=\"Id\" type=\"STRING\" size=\"256\"/><Column id=\"Name\" type=\"STRING\" size=\"256\"/><Column id=\"Level\" type=\"INT\" size=\"1\"/><Column id=\"chk\" type=\"BLOB\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid2", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"ConstColumn0\" type=\"STRING\" size=\"30\"/><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"Name\" type=\"STRING\" size=\"256\"/><Column id=\"Level\" type=\"INT\" size=\"256\"/><Column id=\"chk\" type=\"BLOB\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">1</Col><Col id=\"Name\">Bac</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"id\">1</Col><Col id=\"Name\">Bac</Col><Col id=\"Level\">2</Col></Row><Row><Col id=\"id\">2</Col><Col id=\"Name\">Quoc</Col><Col id=\"Level\">5</Col></Row><Row><Col id=\"id\">3</Col><Col id=\"Name\">Nhan</Col><Col id=\"Level\">4</Col></Row><Row><Col id=\"id\">4</Col><Col id=\"Name\">Nam</Col><Col id=\"Level\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRes", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"role\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new MaskEdit("medit1","200","10","185","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_format("AA-###");
            obj.set_type("string");
            obj.set_maskchar("_");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","13","160","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Mask Edit (String)");
            obj.set_font("18px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00","200","65","185","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_maskchar("#");
            obj.set_type("number");
            obj.set_format("+#,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","68","170","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Mask Edit (Number)");
            obj.set_font("18px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","745","10","170","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Grid (using expr)");
            obj.set_font("18px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","745","46","363","174",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_gridExpr");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Id\"/><Cell col=\"1\" text=\"Name\"/><Cell col=\"2\" text=\"Level\"/></Band><Band id=\"body\"><Cell text=\"bind:Id\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:Name\"/><Cell col=\"2\" text=\"bind:Level\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","401","10","329","182",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_grid2");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("true");
            obj.set_cellclickbound("control");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"ConstColumn0\"/><Cell col=\"1\" text=\"id\"/><Cell col=\"2\" text=\"Name\"/><Cell col=\"3\" text=\"Level\"/><Cell col=\"4\"/></Band><Band id=\"body\"><Cell text=\"bind:ConstColumn0\"/><Cell col=\"1\" text=\"bind:id\"/><Cell col=\"2\" text=\"bind:Name\"/><Cell col=\"3\" text=\"bind:Level\" displaytype=\"editcontrol\" edittype=\"normal\"/><Cell col=\"4\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"bind:chk\" checkboxfalsevalue=\"bind:chk\" controlautosizingtype=\"both\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"expr:dataset.getAvg(&quot;Level&quot;)\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","27","645","195","45",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Button00");
            obj.set_cssclass("btnblue");
            obj.set_icon("url(\'theme://images/btn_TF_Close.png\')");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","170","240","176","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Click here");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","27","593","170","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("CSS ");
            obj.set_font("18px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","10","229","170","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Transaction");
            obj.set_font("18px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","385","240","150","46",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Clear");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","10","370","405","220",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_binddataset("dsRes");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"id\"/><Cell col=\"1\" text=\"name\"/><Cell col=\"2\" text=\"age\"/><Cell col=\"3\" text=\"address\"/><Cell col=\"4\" text=\"role\"/></Band><Band id=\"body\"><Cell text=\"bind:id\"/><Cell col=\"1\" text=\"bind:name\"/><Cell col=\"2\" text=\"bind:age\"/><Cell col=\"3\" text=\"bind:address\"/><Cell col=\"4\" text=\"bind:role\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("ip_id","13","313","153","32",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","217","315","139","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("search");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FormTest.xfdl", function() {

        this.Static00_onclick = function(obj,e)
        {

        };

        this.FormTest_onload = function(obj,e)
        {
        	trace("click cell");
        	this.medit1.set_value("AB121212121");
        	var idx = this.ds_grid2.addRow();
        	this.ds_grid2.setColumn(idx, "id", "6");
        	this.ds_grid2.setColumn(idx, "Name", "name1");
        	trace(this.ds_grid2.getRowCount());
        	trace(this.ds_grid2.getAvg("Level"));
        };

        this.Grid00_oncellclick = function(obj,e)
        {
        	trace("click cell");
        };

        this.Button01_onclick = function(obj,e)
        {
        	var id = "search";
             var url = "http://localhost:8080/employee";
             var reqDs = "";
             var respDs = "dsRes=IDDataset";
             var args = "";
             var callback = "received";

             this.transaction(id, url, reqDs, respDs, args, callback);
        };

        this.received = function(id, code, message)
        {
             if (code == 0) {
                  this.alert(this.dsRes.rowcount + " numbers of data have been found.");
                  trace(this.dsRes.rowcount + " numbers of data have been found.");
             } else {
                  this.alert("Error["+code+"]:"+message);
                  trace("Error["+code+"]:"+message);
             }
        }
        this.Button02_onclick = function(obj,e)
        {
        	this.dsRes.clearData();
        };

        this.Button03_onclick = function(obj,e)
        {
        	var id = this.ip_id.value;
        	this.ds_search.clearData();
        	var idx = this.ds_search.addRow();
        	this.ds_search.setColumn(idx, "id", id);

        	var id = "search1";
             var url = "http://localhost:8080/employee/search";
             var reqDs = "dsInput=ds_search";
             var respDs = "dsRes=IDDataset";
             var args = "";
             var callback = "received";

             this.transaction(id, url, reqDs, respDs, args, callback);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.FormTest_onload,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Static00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
        };
        this.loadIncludeScript("FormTest.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
