(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ProductList");
            this.set_titletext("New Form");
            this.set_background("#F0F1F3");
            if (Form == this.constructor)
            {
                this._setFormPosition(1546,845);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_employees", this);
            obj._setContents("<ColumnInfo><Column id=\"empId\" type=\"STRING\" size=\"256\"/><Column id=\"empName\" type=\"STRING\" size=\"256\"/><Column id=\"typeCd\" type=\"STRING\" size=\"256\"/><Column id=\"posCd\" type=\"STRING\" size=\"256\"/><Column id=\"empRank\" type=\"STRING\" size=\"256\"/><Column id=\"empCoeSalary\" type=\"STRING\" size=\"256\"/><Column id=\"degCd\" type=\"STRING\" size=\"256\"/><Column id=\"empCoeLimit\" type=\"STRING\" size=\"256\"/><Column id=\"empCoePos\" type=\"STRING\" size=\"256\"/><Column id=\"empCoeRes\" type=\"STRING\" size=\"256\"/><Column id=\"empAllCoe\" type=\"STRING\" size=\"256\"/><Column id=\"empNextPro\" type=\"STRING\" size=\"256\"/><Column id=\"noDecision\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/><Column id=\"dateDecision\" type=\"STRING\" size=\"256\"/><Column id=\"totalCount\" type=\"STRING\" size=\"256\"/><Column id=\"chkCol\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_status", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">ALL</Col><Col id=\"VALUE\">All</Col></Row><Row><Col id=\"ID\">ACTIVE</Col><Col id=\"VALUE\">Active</Col></Row><Row><Col id=\"ID\">INACTIVE</Col><Col id=\"VALUE\">Inactive</Col></Row><Row><Col id=\"ID\">PENDING</Col><Col id=\"VALUE\">Pending</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_emp_search", this);
            obj._setContents("<ColumnInfo><Column id=\"empName\" type=\"STRING\" size=\"256\"/><Column id=\"empCoeSalaryMin\" type=\"STRING\" size=\"256\"/><Column id=\"empCoeSalaryMax\" type=\"STRING\" size=\"256\"/><Column id=\"dateDecisionMin\" type=\"STRING\" size=\"256\"/><Column id=\"dateDecisionMax\" type=\"STRING\" size=\"256\"/><Column id=\"empRankMin\" type=\"STRING\" size=\"256\"/><Column id=\"empRankMax\" type=\"STRING\" size=\"256\"/><Column id=\"empAllCoeMin\" type=\"STRING\" size=\"256\"/><Column id=\"empAllCoeMax\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"status\">ALL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_del", this);
            obj._setContents("<ColumnInfo><Column id=\"empId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inventory", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"productCode\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"unit\" type=\"STRING\" size=\"256\"/><Column id=\"quantity\" type=\"STRING\" size=\"256\"/><Column id=\"buyingPrice\" type=\"STRING\" size=\"256\"/><Column id=\"thresholdValue\" type=\"STRING\" size=\"256\"/><Column id=\"expiryDate\" type=\"STRING\" size=\"256\"/><Column id=\"availability\" type=\"STRING\" size=\"256\"/><Column id=\"chkCol\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search_condition","43","8",null,"188","43",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_borderRadius("8px");
            obj.set_background("#ffffff");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_overall_invetory","59","13","216","30",null,null,null,null,null,null,this.div_search_condition.form);
            obj.set_taborder("0");
            obj.set_text("Overall Inventory");
            obj.set_font("normal 500 20px/30px \"Segoe UI\"");
            obj.set_fittocontents("width");
            this.div_search_condition.addChild(obj.name, obj);

            obj = new Div("div00","59","67","144","92",null,null,null,null,null,null,this.div_search_condition.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.div_search_condition.addChild(obj.name, obj);

            obj = new Static("sta00","0","-9","114","33",null,null,null,null,null,null,this.div_search_condition.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("Categories");
            obj.set_font("normal 600 16pt/24px \"Segoe UI\"");
            obj.set_color("#1570ef");
            obj.set_verticalAlign("middle");
            this.div_search_condition.form.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00","0","28","114","30",null,null,null,null,null,null,this.div_search_condition.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("14");
            obj.set_font("normal 600 16pt/24px \"Segoe UI\"");
            obj.set_color("#5d6679");
            this.div_search_condition.form.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","0",null,"114","32",null,"0",null,null,null,null,this.div_search_condition.form.div00.form);
            obj.set_taborder("2");
            obj.set_text("Last 7 days");
            obj.set_font("normal 400 14pt/20px \"Segoe UI\"");
            obj.set_color("#858d9d");
            this.div_search_condition.form.div00.addChild(obj.name, obj);

            obj = new Div("div01","279","56","1","99",null,null,null,null,null,null,this.div_search_condition.form);
            obj.set_taborder("2");
            obj.set_text("div01");
            obj.set_border("0px none #f0f1f3, 1px solid #f0f1f3");
            obj.set_color("#f0f1f3");
            this.div_search_condition.addChild(obj.name, obj);

            obj = new Div("div00_00","353","67","250","92",null,null,null,null,null,null,this.div_search_condition.form);
            obj.set_taborder("3");
            obj.set_text("");
            this.div_search_condition.addChild(obj.name, obj);

            obj = new Static("sta00","0","-9","114","33",null,null,null,null,null,null,this.div_search_condition.form.div00_00.form);
            obj.set_taborder("0");
            obj.set_text("Categories");
            obj.set_font("normal 600 16pt/24px \"Segoe UI\"");
            obj.set_color("#e19133");
            obj.set_verticalAlign("middle");
            this.div_search_condition.form.div00_00.addChild(obj.name, obj);

            obj = new Div("div00","0","28",null,null,"0","0",null,null,null,null,this.div_search_condition.form.div00_00.form);
            obj.set_taborder("1");
            this.div_search_condition.form.div00_00.addChild(obj.name, obj);

            obj = new Static("sta00_00","0","0","114","30",null,null,null,null,null,null,this.div_search_condition.form.div00_00.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("868");
            obj.set_font("normal 600 16pt/24px \"Segoe UI\"");
            obj.set_color("#5d6679");
            this.div_search_condition.form.div00_00.form.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","0",null,"114","32",null,"0",null,null,null,null,this.div_search_condition.form.div00_00.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("Last 7 days");
            obj.set_font("normal 400 14pt/20px \"Segoe UI\"");
            obj.set_color("#858d9d");
            this.div_search_condition.form.div00_00.form.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_01",null,"0","114","30","0",null,null,null,null,null,this.div_search_condition.form.div00_00.form.div00.form);
            obj.set_taborder("2");
            obj.set_text("₹25000");
            obj.set_font("normal 600 16pt/24px \"Segoe UI\"");
            obj.set_color("#5d6679");
            obj.set_textAlign("right");
            this.div_search_condition.form.div00_00.form.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","136",null,"114","32",null,"0",null,null,null,null,this.div_search_condition.form.div00_00.form.div00.form);
            obj.set_taborder("3");
            obj.set_text("Revenue");
            obj.set_font("normal 400 14pt/20px \"Segoe UI\"");
            obj.set_color("#858d9d");
            obj.set_textAlign("right");
            this.div_search_condition.form.div00_00.form.div00.addChild(obj.name, obj);

            obj = new Div("div01_00","677","56","1","99",null,null,null,null,null,null,this.div_search_condition.form);
            obj.set_taborder("4");
            obj.set_border("0px none #f0f1f3, 1px solid #f0f1f3");
            obj.set_color("#f0f1f3");
            this.div_search_condition.addChild(obj.name, obj);

            obj = new Div("div00_00_00","749","67","250","92",null,null,null,null,null,null,this.div_search_condition.form);
            obj.set_taborder("5");
            obj.set_text("");
            this.div_search_condition.addChild(obj.name, obj);

            obj = new Static("sta00","0","-9","114","33",null,null,null,null,null,null,this.div_search_condition.form.div00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("Top Selling");
            obj.set_font("normal 600 16pt/24px \"Segoe UI\"");
            obj.set_color("#845ebc");
            obj.set_verticalAlign("middle");
            this.div_search_condition.form.div00_00_00.addChild(obj.name, obj);

            obj = new Div("div00","0","28",null,null,"0","0",null,null,null,null,this.div_search_condition.form.div00_00_00.form);
            obj.set_taborder("1");
            this.div_search_condition.form.div00_00_00.addChild(obj.name, obj);

            obj = new Static("sta00_00","0","0","114","30",null,null,null,null,null,null,this.div_search_condition.form.div00_00_00.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("5");
            obj.set_font("normal 600 16pt/24px \"Segoe UI\"");
            obj.set_color("#5d6679");
            this.div_search_condition.form.div00_00_00.form.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","0",null,"114","32",null,"0",null,null,null,null,this.div_search_condition.form.div00_00_00.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("Last 7 days");
            obj.set_font("normal 400 14pt/20px \"Segoe UI\"");
            obj.set_color("#858d9d");
            this.div_search_condition.form.div00_00_00.form.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_01",null,"0","114","30","0",null,null,null,null,null,this.div_search_condition.form.div00_00_00.form.div00.form);
            obj.set_taborder("2");
            obj.set_text("₹2500");
            obj.set_font("normal 600 16pt/24px \"Segoe UI\"");
            obj.set_color("#5d6679");
            obj.set_textAlign("right");
            this.div_search_condition.form.div00_00_00.form.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","136",null,"114","32",null,"0",null,null,null,null,this.div_search_condition.form.div00_00_00.form.div00.form);
            obj.set_taborder("3");
            obj.set_text("Cost");
            obj.set_font("normal 400 14pt/20px \"Segoe UI\"");
            obj.set_color("#858d9d");
            obj.set_textAlign("right");
            this.div_search_condition.form.div00_00_00.form.div00.addChild(obj.name, obj);

            obj = new Div("div01_00_00","1095","56","1","99",null,null,null,null,null,null,this.div_search_condition.form);
            obj.set_taborder("6");
            obj.set_border("0px none #f0f1f3, 1px solid #f0f1f3");
            obj.set_color("#f0f1f3");
            this.div_search_condition.addChild(obj.name, obj);

            obj = new Div("div00_00_00_00","1168","67","250","92",null,null,null,null,null,null,this.div_search_condition.form);
            obj.set_taborder("7");
            obj.set_text("");
            this.div_search_condition.addChild(obj.name, obj);

            obj = new Static("sta00","0","-9","114","33",null,null,null,null,null,null,this.div_search_condition.form.div00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("Low Stocks");
            obj.set_font("normal 600 16pt/24px \"Segoe UI\"");
            obj.set_color("#f36960");
            obj.set_verticalAlign("middle");
            this.div_search_condition.form.div00_00_00_00.addChild(obj.name, obj);

            obj = new Div("div00","0","28",null,null,"0","0",null,null,null,null,this.div_search_condition.form.div00_00_00_00.form);
            obj.set_taborder("1");
            this.div_search_condition.form.div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("sta00_00","0","0","114","30",null,null,null,null,null,null,this.div_search_condition.form.div00_00_00_00.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("12");
            obj.set_font("normal 600 16pt/24px \"Segoe UI\"");
            obj.set_color("#5d6679");
            this.div_search_condition.form.div00_00_00_00.form.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","0",null,"114","32",null,"0",null,null,null,null,this.div_search_condition.form.div00_00_00_00.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("Ordered");
            obj.set_font("normal 400 14pt/20px \"Segoe UI\"");
            obj.set_color("#858d9d");
            this.div_search_condition.form.div00_00_00_00.form.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_01",null,"0","114","30","0",null,null,null,null,null,this.div_search_condition.form.div00_00_00_00.form.div00.form);
            obj.set_taborder("2");
            obj.set_text("2");
            obj.set_font("normal 600 16pt/24px \"Segoe UI\"");
            obj.set_color("#5d6679");
            obj.set_textAlign("right");
            this.div_search_condition.form.div00_00_00_00.form.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","136",null,"114","32",null,"0",null,null,null,null,this.div_search_condition.form.div00_00_00_00.form.div00.form);
            obj.set_taborder("3");
            obj.set_text("Not in stock");
            obj.set_font("normal 400 14pt/20px \"Segoe UI\"");
            obj.set_color("#858d9d");
            obj.set_textAlign("right");
            this.div_search_condition.form.div00_00_00_00.form.div00.addChild(obj.name, obj);

            obj = new Div("div_products","43","204",null,null,"43","8",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_borderRadius("8px");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_employees","21","28","120","30",null,null,null,null,null,null,this.div_products.form);
            obj.set_taborder("0");
            obj.set_text("Products");
            obj.set_font("normal 500 20px/30px \"Segoe UI\"");
            this.div_products.addChild(obj.name, obj);

            obj = new Button("btn_add_product",null,"19","118","40","283",null,null,null,null,null,this.div_products.form);
            obj.set_taborder("1");
            obj.set_text("Add Product");
            obj.set_color("#ffffff");
            obj.set_font("normal 500 14px/20px \"Segoe UI\"");
            obj.set_background("#1366D9");
            obj.set_borderRadius("4px");
            this.div_products.addChild(obj.name, obj);

            obj = new Grid("grd_products","21","68",null,null,"21","68",null,null,null,null,this.div_products.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_border("0px none");
            obj.set_nodatatext("No data found");
            obj.set_selecttype("row");
            obj.set_binddataset("ds_inventory");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"138\"/><Column size=\"111\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"108\"/></Columns><Rows><Row size=\"46\" band=\"head\"/><Row size=\"46\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #d0d3d9\"/><Cell col=\"1\" text=\"Products\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #d0d3d9\" color=\"#667085\" font=\"normal 500 14px/20px &quot;Segoe UI&quot;\" textAlign=\"left\"/><Cell col=\"2\" text=\"Buying Price\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #d0d3d9\" color=\"#667085\" font=\"normal 500 14px/20px &quot;Segoe UI&quot;\" textAlign=\"left\"/><Cell col=\"3\" text=\"Quantity\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #d0d3d9\" color=\"#667085\" font=\"normal 500 14px/20px &quot;Segoe UI&quot;\" textAlign=\"left\"/><Cell col=\"4\" text=\"Threshold Value\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #d0d3d9\" color=\"#667085\" font=\"normal 500 14px/20px &quot;Segoe UI&quot;\" textAlign=\"left\"/><Cell col=\"5\" text=\"Expiry Date\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #d0d3d9\" color=\"#667085\" font=\"normal 500 14px/20px &quot;Segoe UI&quot;\" textAlign=\"left\"/><Cell col=\"6\" text=\"Availability\" background=\"#ffffff\" border=\"0px none, 0px none, 1px solid #d0d3d9\" color=\"#667085\" font=\"normal 500 14px/20px &quot;Segoe UI&quot;\" textAlign=\"left\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chkCol\" border=\"0px none,0px none,1px solid #D0D3D9\"/><Cell col=\"1\" text=\"bind:name\" border=\"0px none,0px none,1px solid #D0D3D9\" color=\"#48505e\" font=\"normal 500 14px/20px &quot;Segoe UI&quot;\"/><Cell col=\"2\" text=\"bind:buyingPrice\" border=\"0px none,0px none,1px solid #D0D3D9\" color=\"#48505e\" font=\"normal 500 14px/20px &quot;Segoe UI&quot;\"/><Cell col=\"3\" text=\"bind:quantity\" border=\"0px none,0px none,1px solid #D0D3D9\" color=\"#48505e\" font=\"normal 500 14px/20px &quot;Segoe UI&quot;\"/><Cell col=\"4\" text=\"bind:thresholdValue\" border=\"0px none,0px none,1px solid #D0D3D9\" color=\"#48505e\" font=\"normal 500 14px/20px &quot;Segoe UI&quot;\"/><Cell col=\"5\" text=\"bind:expiryDate\" border=\"0px none,0px none,1px solid #D0D3D9\" color=\"#48505e\" font=\"normal 500 14px/20px &quot;Segoe UI&quot;\"/><Cell col=\"6\" border=\"0px none,0px none,1px solid #D0D3D9\" color=\"#48505e\" font=\"normal 500 14px/20px &quot;Segoe UI&quot;\" text=\"bind:availability\"/></Band></Format></Formats>");
            this.div_products.addChild(obj.name, obj);

            obj = new Button("btn_previous","21",null,"101","40",null,"12",null,null,null,null,this.div_products.form);
            obj.set_taborder("3");
            obj.set_text("Previous");
            obj.set_borderRadius("4px");
            obj.set_font("normal 500 14px/20px \"Segoe UI\"");
            obj.set_color("#5d6679");
            this.div_products.addChild(obj.name, obj);

            obj = new Button("btn_next",null,null,"101","40","21","12",null,null,null,null,this.div_products.form);
            obj.set_taborder("4");
            obj.set_text("Next");
            obj.set_borderRadius("4px");
            obj.set_font("normal 500 14px/20px \"Segoe UI\"");
            obj.set_color("#5d6679");
            this.div_products.addChild(obj.name, obj);

            obj = new Static("sta_pageText","734",null,"78","40",null,"12",null,null,null,null,this.div_products.form);
            obj.set_taborder("5");
            obj.set_text("Page 0 of 0");
            obj.set_font("normal 400 14px/20px \"Segoe UI\"");
            this.div_products.addChild(obj.name, obj);

            obj = new Button("btn_download_all_products",null,"19","118","40","21",null,null,null,null,null,this.div_products.form);
            obj.set_taborder("6");
            obj.set_text("Download all");
            obj.set_borderRadius("4px");
            obj.set_font("normal 500 14px/20px \"Segoe UI\"");
            obj.set_color("#5d6679");
            this.div_products.addChild(obj.name, obj);

            obj = new Button("btn_filter_product",null,"19","102","40","160",null,null,null,null,null,this.div_products.form);
            obj.set_taborder("7");
            obj.set_text("Filters");
            obj.set_borderRadius("4px");
            obj.set_font("normal 500 14px/20px \"Segoe UI\"");
            obj.set_color("#5d6679");
            this.div_products.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_search_condition.form.div00.form
            obj = new Layout("default","",0,0,this.div_search_condition.form.div00.form,function(p){});
            this.div_search_condition.form.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_search_condition.form.div01
            obj = new Layout("default","",0,0,this.div_search_condition.form.div01.form,function(p){});
            this.div_search_condition.form.div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_search_condition.form.div00_00.form.div00.form
            obj = new Layout("default","",0,0,this.div_search_condition.form.div00_00.form.div00.form,function(p){});
            this.div_search_condition.form.div00_00.form.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_search_condition.form.div00_00.form
            obj = new Layout("default","",0,0,this.div_search_condition.form.div00_00.form,function(p){});
            this.div_search_condition.form.div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_search_condition.form.div01_00
            obj = new Layout("default","",0,0,this.div_search_condition.form.div01_00.form,function(p){});
            this.div_search_condition.form.div01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_search_condition.form.div00_00_00.form.div00.form
            obj = new Layout("default","",0,0,this.div_search_condition.form.div00_00_00.form.div00.form,function(p){});
            this.div_search_condition.form.div00_00_00.form.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_search_condition.form.div00_00_00.form
            obj = new Layout("default","",0,0,this.div_search_condition.form.div00_00_00.form,function(p){});
            this.div_search_condition.form.div00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_search_condition.form.div01_00_00
            obj = new Layout("default","",0,0,this.div_search_condition.form.div01_00_00.form,function(p){});
            this.div_search_condition.form.div01_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_search_condition.form.div00_00_00_00.form.div00.form
            obj = new Layout("default","",0,0,this.div_search_condition.form.div00_00_00_00.form.div00.form,function(p){});
            this.div_search_condition.form.div00_00_00_00.form.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_search_condition.form.div00_00_00_00.form
            obj = new Layout("default","",0,0,this.div_search_condition.form.div00_00_00_00.form,function(p){});
            this.div_search_condition.form.div00_00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_search_condition.form
            obj = new Layout("default","",0,0,this.div_search_condition.form,function(p){});
            this.div_search_condition.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_products.form
            obj = new Layout("default","",0,0,this.div_products.form,function(p){});
            this.div_products.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",845,1546,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Inventory.xfdl", function() {

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.EmployeeFrame_onload,this);
            this.div_products.form.grd_products.addEventHandler("onheadclick",this.div_employees_grd_employees_onheadclick,this);
            this.div_products.form.grd_products.addEventHandler("oncelldblclick",this.div_employees_grd_employees_oncelldblclick,this);
            this.div_products.form.grd_products.addEventHandler("oncellclick",this.div_employees_grd_employees_oncellclick,this);
            this.div_products.form.btn_previous.addEventHandler("onclick",this.div_employees_btn_previous_onclick,this);
            this.div_products.form.btn_next.addEventHandler("onclick",this.div_employees_btn_next_onclick,this);
        };
        this.loadIncludeScript("Inventory.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
