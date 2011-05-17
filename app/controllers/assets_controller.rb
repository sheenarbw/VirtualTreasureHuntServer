class AssetsController < ApplicationController
  # GET /assets
  # GET /assets.xml
  def index
    @sidebar_title = "Available Assets"
    
    @onload = "initialize()"
    
    @assets = Asset.all #(:select => [:id,:latitude,:longitude, :name, :description])
    
    respond_to do |format|
      format.js
      format.html # index.html.erb
      format.xml  { @assets }
      format.json { render :json => @assets }
      
    end
  end

  # GET /assets/1
  # GET /assets/1.xml
  def show
    @sidebar_title = "Asset Details"
    
    @asset = Asset.find(params[:id])

    respond_to do |format|
      format.js # show.html.erb
      format.xml  { render :layout => false }
      format.json { render :json => @asset }
    end
  end

  # GET /assets/new
  # GET /assets/new.xml
  def new
    @sidebar_title = "New Asset"
    
    @asset = Asset.new
    respond_to do |format|
      format.js
      format.html # new.html.erb
      format.xml  { render :xml => @asset }
    end
  end

  # GET /assets/1/edit
  def edit
    @sidebar_title = "Edit Asset"
    
    @asset = Asset.find(params[:id])
  end

  # POST /assets
  # POST /assets.xml
  def create
    @asset = Asset.new(params[:asset])

    respond_to do |format|
      if @asset.save
        format.html { redirect_to(@asset, :notice => 'Asset was successfully created.') }
        format.xml  { render :xml => @asset, :status => :created, :location => @asset }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @asset.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /assets/1
  # PUT /assets/1.xml
  def update
    @asset = Asset.find(params[:id])

    respond_to do |format|
      if @asset.update_attributes(params[:asset])
        format.js
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @asset.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /assets/1
  # DELETE /assets/1.xml
  def destroy
    @asset = Asset.find(params[:id])
    @asset.destroy

    respond_to do |format|
      format.html { redirect_to(assets_url) }
      format.xml  { head :ok }
    end
  end
end
